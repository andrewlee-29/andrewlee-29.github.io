import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  desc: string;
  link1?: { url: string; label: string };
  link2?: { url: string; label: string };
};

export default function ProjectCard({
  title,
  desc,
  link1,
  link2,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-5 bg-white rounded-xl shadow border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold mb-2 text-cyan-700 dark:text-emerald-400">{title}</h3>
      <p className="text-gray-600 mb-3 dark:text-gray-300">{desc}</p>
      <div className="flex gap-4">
        {link1 && (
          <a
            className="text-blue-600 hover:underline dark:text-blue-400"
            href={link1.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link1.label}
          </a>
        )}
        {link2 && (
          <a
            className="text-blue-600 hover:underline dark:text-blue-400"
            href={link2.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link2.label}
          </a>
        )}
      </div>
    </motion.div>
  );
}