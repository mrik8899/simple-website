// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 My Website. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" className="text-white hover:text-blue-600">Facebook</a>
            <a href="https://twitter.com" className="text-white hover:text-blue-400">Twitter</a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  