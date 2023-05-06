import logo from './components/assets/pizza.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header1';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/location" element={<LocationInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
