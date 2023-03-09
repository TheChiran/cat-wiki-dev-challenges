import { Routes, Route } from 'react-router-dom';

import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import BreedDetail from '../../views/BreedDetail/Index';
import Home from '../../views/Home/Index';

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main-layout">
        <div className="header-section">
          <Header />
        </div>
        <div className="content-section">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/breed/:id' element={<BreedDetail />} />
            </Routes>
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
