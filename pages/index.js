import Link from 'next/link'; // Ensure this is imported

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex items-center justify-center text-white px-6">
        <div className="text-center max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build Something <span className="text-pink-400">Beautiful</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Launch your ideas with a sleek modern layout powered by Next.js and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/about" className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl text-lg transition shadow-lg">
              Learn More
            </Link>
            <Link href="/contact" className="border border-pink-400 hover:bg-pink-400 hover:text-white text-pink-300 py-3 px-6 rounded-xl text-lg transition shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
