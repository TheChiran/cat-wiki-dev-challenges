import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import BreedDetail from '../../views/BreedDetail/Index';
import Home from '../../views/Home/Index';
import TopSearch from '../../views/TopSearch/Index';

import { AnimatePresence } from 'framer-motion';

import './App.css'
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="App">
      <div className="main-layout">
        <div className="header-section">
          <Header />
        </div>
        <div className="content-section">
          <div className="main-content">
            <AnimatePresence mode='wait'>
              <Routes location={location} key={pathname}>
                <Route path="/" element={<Home />} />
                <Route path='/breed/:id' element={<BreedDetail />} />
                <Route path='/top-search' element={<TopSearch />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
