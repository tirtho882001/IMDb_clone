import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from './constants/route';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
        <Route path={routhPath.categories} element={<CategoryMovies />} />
        <Route path={routhPath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
