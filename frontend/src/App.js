import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import VeiwPrice from './pages/Prices/VeiwPrice';
import AddPrice from './pages/Prices/AddPrice';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/allPrices" element={<VeiwPrice/>}/>
          <Route path="/addPrice" element={<AddPrice/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
