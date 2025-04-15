// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 fixed w-full z-10 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-white font-bold text-xl">
            <Link href="/">My Website</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
