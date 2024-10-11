import './App.css';
import DashboardApp from './app/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardApp />} />
      </Routes>
    </Router>
  );
}

export default App;