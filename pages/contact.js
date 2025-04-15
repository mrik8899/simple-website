// pages/contact.js

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl text-center">
        Feel free to reach out via email or any of our social channels.
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
