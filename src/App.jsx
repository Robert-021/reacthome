import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add the component here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/ofertas" element={<Offers />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
