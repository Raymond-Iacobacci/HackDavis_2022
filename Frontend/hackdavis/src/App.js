import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Map from './pages/Map.js';
import './App.css'
import AboutUs from './pages/AboutUs';

function App() {

  /**
   * TODO: Type your bios here!
   */
  const Bios = {
    Norman:
      ``,
    Jorge:
      ``,
    Nic:
      `Hi! My name is Nicolas Ventura, or Nic. I am a master's student in Mechanical and Aerospace Engineering at UC Davis. I work at Lawrence Berkeley National Laboratory for building energy monitoring and efficiency, and I am passionate about saving energy and going green. Outside of work and academics, I love hiking, camping, and skiing, and I am a connoiseur of all things Star Wars.`,
    Raymon:
      ``,
  };

  return (
    <div className="App">
      <div className='container align-items-center'> 
        <Router> 


          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/turbineData' element={<Map />} />
            <Route exact path='/aboutUs/Norman' element={<AboutUs name='Norman' major="Computer Science" bio={Bios.Norman}  />} />
            
            <Route exact path='/aboutUs/Jorge' element={<AboutUs name='Jorge' major='Genetics'  bio={Bios.Jorge}  />} />
            <Route exact path='/aboutUs/Nic' element={<AboutUs name='Nic' major='Mechanical Engineering'  bio={Bios.Nic}  />} />
            <Route exact path='/aboutUs/Raymon' element={<AboutUs name='Raymon' major='Computer Science and Engineering, Mathematics' bio={Bios.Raymon}  />} />
          </Routes>



        </Router>
      </div>
    </div>
  );
}

export default App;
