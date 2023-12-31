import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 
        <Routes>
            <Route path="/" exact Component={Home}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
