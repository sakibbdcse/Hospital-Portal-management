import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/appoinment" element={<Appoinment />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
