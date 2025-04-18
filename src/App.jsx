import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Profile from './components/pages/Profile';
import Product from './components/pages/Product';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Preloader from './Preloader'; 
import Aboute from './components/pages/Aboute';
import Contactus from './components/pages/Contactus';
import { useState, useEffect } from 'react';

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Loading ? (
        <Preloader />
      ) : (
        <div style={{ fontFamily: 'vazir'  }} className='bg-[#fcfdfc] text-[#0e1510]'>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/aboute' element={<Aboute />} />
              <Route path='/contact-us' element={<Contactus />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
