import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Map from './pages/Map';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='container align-items-center'> 
        <Router> 


          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/turbineData' element={<Map />} />

          </Routes>



        </Router>
      </div>
    </div>
  );
}

export default App;
