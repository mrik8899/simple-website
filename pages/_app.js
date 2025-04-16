// pages/_app.js
import Navbar from '../components/Navbar'; // Import Navbar component
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* Navbar is included across all pages */}
      <Component {...pageProps} /> {/* The page content */}
    </div>
  );
}

export default MyApp;
