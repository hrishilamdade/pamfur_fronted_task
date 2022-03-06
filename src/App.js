import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import CalenderHome from './components/Home/CalenderHome';
import CalenderComponent from './components/Calender/CalenderComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CalenderHome/>} />
          <Route path="/calender" element={<CalenderComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
