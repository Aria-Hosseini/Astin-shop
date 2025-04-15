import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Profile from './components/pages/Profile';
import Product from './components/pages/Product';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Preloader from './Preloader'; 
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
        <div style={{ fontFamily: 'vazir' }}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
