import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white">
      <header className="max-w-6xl mx-auto py-6 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">SleekSite</h1>
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-300 transition">About</Link>
          <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </nav>
      </header>
      <main className="px-6">{children}</main>
    </div>
  );
}
