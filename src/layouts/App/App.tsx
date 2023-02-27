import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css'
import Sidebar from '../../components/Sidebar/Index';
import Buttons from '../../views/Buttons/Index';

function App() {
  return (
    <div className="App">
      <div className="main-layout">
        <div className="nav-section">
          <Sidebar/>
        </div>
        <div className="content-section">
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to={"/buttons"}/>}/>
            <Route path="/buttons" element={<Buttons/>}/>
          </Routes>
          </div>
          <div className="infos">
            <h2 className="icons-link">Icons: <a href="https://material.io/resources/icons/?style=round" target="_blank">https://material.io/resources/icons/?style=round</a></h2>
            <h2 className="created-by">created by <a href="https://devchallenges.io/portfolio/TheChiran" target="_blank">ChiranSWE</a> - devChallenges.io</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
