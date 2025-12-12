import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const controls = useAnimation();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    controls.start({ width: "100%" });
    const timer = setTimeout(() => setFadeOut(true), 600); // Progress bar: 0.6s
    return () => clearTimeout(timer);
  }, [controls]);

  // When fadeOut starts, call onComplete after fade duration
  useEffect(() => {
    if (fadeOut) {
      const fadeTimer = setTimeout(onComplete, 400); // Fade out: 0.4s
      return () => clearTimeout(fadeTimer);
    }
  }, [fadeOut, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      {/* fading effect*/}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ opacity: { duration: 0.4 } }} // Fade out: 0.4s
        className="flex flex-col items-center"
      >
        <div className="mb-4 text-2xl font-bold text-emerald-300">
          Loading...
        </div>
        <div className="w-64 h-3 bg-gray-700 rounded overflow-hidden">
          {/* progress bar */}
          <motion.div
            className="h-full bg-emerald-400"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "linear" }} // Progress bar: 0.6s
          />
        </div>
      </motion.div>
    </div>
  );
}