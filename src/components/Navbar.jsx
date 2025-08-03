import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-50 py-4">
      <div className="w-full flex justify-center">
        <div className="bg-white/90 backdrop-blur-md shadow-md px-8 py-3 rounded-full flex items-center space-x-6 text-sm md:text-base font-medium text-gray-800">
          <Link to="/" className="hover:text-green-700 transition-colors duration-300">Beranda</Link>
          <Link to="/about" className="hover:text-green-700 transition-colors duration-300">Tentang</Link>
          <Link to="/prevention" className="hover:text-green-700 transition-colors duration-300">Solusi</Link>
          <Link to="/kalkulatorgizi" className="hover:text-green-700 transition-colors duration-300">Kalkulator Gizi</Link>
          <Link to="/contact" className="hover:text-green-700 transition-colors duration-300">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
