import { projects } from '../src/data/projects.ts';
import { experiences } from '../src/data/experiences.ts';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

const projectList = document.querySelector('#project-list');
projects.forEach(project => {
  const article = element('article', 'project-entry');
  article.append(element('h2', '', project.title));
  const detail = element('div', 'project-detail');
  detail.append(element('p', '', project.desc));
  const links = element('div', 'project-links');
  [project.link1, project.link2].filter(Boolean).forEach(link => {
    const anchor = element('a', 'text-link', link.label);
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.setAttribute('aria-label', `${link.label}: ${project.title} (opens in a new tab)`);
    links.append(anchor);
  });
  detail.append(links);
  article.append(detail);
  projectList.append(article);
});

const experienceList = document.querySelector('#experience-list');
experiences.forEach(experience => {
  const item = element('li', 'experience-entry');
  item.append(element('p', 'experience-date', experience.date));
  const detail = element('div');
  detail.append(element('h3', '', experience.title), element('p', 'company', experience.company));
  const responsibilities = element('ul', 'responsibilities');
  experience.description.split('\n').filter(line => line.trim()).forEach(line => {
    responsibilities.append(element('li', '', line.trim().replace(/^•\s*/, '')));
  });
  detail.append(responsibilities);
  item.append(detail);
  experienceList.append(item);
});
