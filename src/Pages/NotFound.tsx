import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <p className="mb-3 font-semibold text-cyan-700 dark:text-emerald-300">404</p>
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
        Page not found
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block rounded px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-emerald-300 dark:text-gray-900 dark:hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 dark:focus-visible:outline-emerald-300"
      >
        Back to home
      </Link>
    </section>
  );
}
