import MarkdownIt from 'markdown-it';
import './writing.css';

// Notes are bundled at build time, so this also works on GitHub Pages.
const sources = import.meta.glob('/Notes/**/*.md', {
  query: '?raw', import: 'default', eager: true,
});
const markdown = new MarkdownIt({ html: false });
const list = document.querySelector('#writing-notes');
const entries = Object.entries(sources).sort(([a], [b]) => a.localeCompare(b));

for (const [noteIndex, [path, source]] of entries.entries()) {
  const tokens = markdown.parse(source, {});
  const heading = tokens.findIndex(token => token.type === 'heading_open');
  const title = heading >= 0
    ? tokens[heading + 1].content
    : path.split('/').pop().replace(/\.md$/, '').replace(/[-_]/g, ' ');
  const entry = document.createElement('details');
  entry.className = 'note-entry';
  const summary = document.createElement('summary');
  summary.textContent = title;
  const body = document.createElement('article');
  body.className = 'note-body';
  body.setAttribute('aria-label', title);
  const reader = document.createElement('div');
  reader.className = 'note-reader';
  const contents = document.createElement('nav');
  contents.className = 'note-contents';
  contents.setAttribute('aria-label', `Contents of ${title}`);
  const label = document.createElement('h2');
  label.textContent = 'On this page';
  const topics = document.createElement('ol');
  const headings = tokens.filter(token => token.type === 'heading_open');
  const baseLevel = Math.min(...headings.map(token => Number(token.tag.slice(1))));
  let sectionIndex = 0;
  for (const [index, token] of tokens.entries()) {
    if (token.type !== 'heading_open') continue;
    const id = `note-${noteIndex}-section-${sectionIndex++}`;
    token.attrSet('id', id);
    token.attrSet('tabindex', '-1');
    const item = document.createElement('li');
    item.style.setProperty('--level', String(Number(token.tag.slice(1)) - baseLevel));
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = (tokens[index + 1].children || [])
      .map(child => ['text', 'code_inline', 'image'].includes(child.type) ? child.content : child.type === 'softbreak' ? ' ' : '')
      .join('') || 'Untitled section';
    button.setAttribute('aria-controls', id);
    button.addEventListener('click', () => {
      const target = document.getElementById(id);
      // Keep #writing intact: heading hashes would trigger the site's page router.
      target.focus({ preventScroll: true });
      target.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
    item.append(button);
    topics.append(item);
  }
  contents.append(label, topics);
  if (headings.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'This note has no section headings.';
    contents.append(empty);
  }
  body.innerHTML = markdown.renderer.render(tokens, markdown.options, {});
  reader.append(contents, body);
  entry.append(summary, reader);
  list.append(entry);
}

if (entries.length === 0) {
  const empty = document.createElement('p');
  empty.textContent = 'No notes published yet.';
  list.append(empty);
} else {
  list.firstElementChild.open = true;
  const preview = document.querySelector('[data-writing-preview]');
  preview.textContent = `${entries.length} ${entries.length === 1 ? 'note' : 'notes'} to explore.`;
}
