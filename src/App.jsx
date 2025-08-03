import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Prevention from './pages/Prevention';
import Contact from './pages/Contact';
import KalkulatorGizi from './pages/Kalkulatorgizi';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-gray-800 w-full">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow w-full bg-[#f3fdf6]">
          <div className="mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/prevention" element={<Prevention />} />
              <Route path="/kalkulatorgizi" element={<KalkulatorGizi />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
