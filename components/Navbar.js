import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-bold">SleekSite</h1>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-purple-300 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-purple-300 transition">About</Link>
          <Link href="/contact" className="text-white hover:text-purple-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
