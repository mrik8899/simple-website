import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/hero-background.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to Our Amazing Website
          </h1>
          <p className="text-lg mb-6">
            Your gateway to excellence and innovation
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 1</h3>
              <Image
                src="/images/service-image-1.avif"
                alt="Service 1"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 2</h3>
              <Image
                src="/images/service-image-2.avif"
                alt="Service 2"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 mt-4">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service 3</h3>
              <Image
                src="/images/service-image-3.avif"
                alt="Service 3"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
              <p className="text-gray-700 mt-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                className="p-3 rounded-lg border"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                className="p-3 rounded-lg border"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                className="p-3 rounded-lg border"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
