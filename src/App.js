import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registar from './Pages/Login/Registar/Registar';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registar" element={<Registar />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
