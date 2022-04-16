import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Map from './pages/Map';
import './App.css'
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <div className='container align-items-center'> 
        <Router> 


          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/turbineData' element={<Map />} />
            <Route exact path='/aboutUs/Norman' element={<AboutUs name='Norman'  bio=' '  />} />
            
            <Route exact path='/aboutUs/Jorge' element={<AboutUs name='Jorge'  bio=' '  />} />
            <Route exact path='/aboutUs/Nic' element={<AboutUs name='Nic'  bio=' '  />} />
            <Route exact path='/aboutUs/Raymon' element={<AboutUs name='Raymon'  bio=' '  />} />
          </Routes>



        </Router>
      </div>
    </div>
  );
}

export default App;
