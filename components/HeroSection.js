// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Welcome to Our Amazing Website</h1>
          <p className="text-lg mb-6">Your gateway to excellence and innovation</p>
          <a href="#contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">Contact Us</a>
        </div>
      </section>
    );
  }
  