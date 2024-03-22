import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appoinment from './pages/Appoinment/Appoinment';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/appoinment" element={<Appoinment />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
