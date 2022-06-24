import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registar from './Pages/Login/Registar/Registar';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Home />}></Route>

          <Route path="/home" element={<Home />}></Route>

          <Route path="/appointment" element={<Appointment />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/registar" element={<Registar />}></Route>

        </Routes>
      </Router>
    </div >
  );
}

export default App;
