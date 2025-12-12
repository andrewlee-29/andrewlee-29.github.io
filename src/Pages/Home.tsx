import { motion } from "framer-motion";


export default function Home() {


  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* Centered Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-6 py-10">
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I’m Andrew Lee 👋
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300">
          Welcome to my portfolio website.
        </p>
      </section>
    </div>
  );
}

