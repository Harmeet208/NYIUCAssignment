import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Lobby from './components/Lobby';
import Dashboard from './components/Dashboard';
import Auditorium from './components/Auditorium';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/lobby" element={<Lobby />} />
          <Route exact path="/auditorium" element={<Auditorium />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
