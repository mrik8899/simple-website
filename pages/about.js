// pages/about.js

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl text-center">
        This is a simple modern website built using Next.js and styled with Tailwind CSS.
        It is easy to expand this layout and add more features.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
