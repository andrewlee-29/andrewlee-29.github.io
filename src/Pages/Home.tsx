import { motion } from "framer-motion";

export default function Home() {
  return (
    //make it centered and nice padding
    <section className="max-w-4xl mx-auto px-6 py-10">
      <motion.h1 className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I’m Andrew Lee 👋
      </motion.h1>

      <p>Welcome to my portfolio website.</p>
    </section>
  );
}