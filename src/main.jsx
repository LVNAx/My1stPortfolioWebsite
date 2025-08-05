import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Initialize AOS
AOS.init({
  duration: 1000,
  delay: 100,
  once: false, // Animasi bisa repeat
  offset: 50, // Offset lebih kecil agar Hero section terdeteksi
  startEvent: 'DOMContentLoaded', // Mulai saat DOM ready
  disable: false, // Pastikan tidak disable
});

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <PreLoader />
    <Navbar/>
    <App />
    <Footer />
  </StrictMode>,
)