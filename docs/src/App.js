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
      `Hey! Im Norman Gutierrez and im a second year Computer Science major at UC Davis. I have strong interest in both web development and web3.0. Outside of school I like to swim, play piano, and visit new places.`,
    Jorge:
      `Hello, my name is Jorge Vilanova, or Alejandro. I am a 5th year Genetics major student at UC Davis. I've been working on my web development skills for the past two years since covid in hopes of one day launching my own web app as a business. I have been doing genetics and web development in the hopes of one day getting a job in the tech or biotech industry. I am also interested in the crypto community, running my own ethereum miner at home and working on dapps with the solidity programming language. I am passionate about web3.0 and its potential uses in the future for a decentralized future.`,
    Nic:
      `Hi! My name is Nicolas Ventura, or Nic. I am a master\'s student in Mechanical and Aerospace Engineering at UC Davis. I work at Lawrence Berkeley National Laboratory for building energy monitoring and efficiency, and I am passionate about saving energy and going green. Outside of work and academics, I love hiking, camping, and skiing, and I am a connoiseur of all things Star Wars.`,
    Raymon:
      `Hi! My name is Raymond Iacobacci, an Undergraduate doubling in Computer Science Engineering and Mathematics. I specialize in Machine Learning and Backend Development, and swim outside of school.`,
  };

  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <div className='container align-items-center'>
        <Router basename={process.env.PUBLIC_URL}>


          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/turbineData' element={<Map />} />
            <Route path='/aboutUs/Norman' element={<AboutUs name='Norman' major="Computer Science" bio={Bios.Norman} img='https://m.media-amazon.com/images/I/71IIvk4xZIL._SS500_.jpg' />} />
            <Route path='/aboutUs/Jorge' element={<AboutUs name='Jorge' major='Genetics'  bio={Bios.Jorge} img='https://i.pinimg.com/originals/27/11/45/27114591b632f74dbf33dbe0f097a001.jpg' />} />
            <Route path='/aboutUs/Nic' element={<AboutUs name='Nic Ventura' major='Mechanical Engineering'  bio={Bios.Nic} img='https://bootdey.com/img/Content/user-453533-fdadfd.png' />} />
            <Route path='/aboutUs/Raymon' element={<AboutUs name='Raymond' major='Computer Science and Engineering, Mathematics' bio={Bios.Raymon} img='https://hbomax-images.warnermediacdn.com/images/GYULcuANBr8PCVAEAAALp/tileburnedin?size=1280x720&partner=hbomaxcom&v=de0526cf7cc67c3c73d5ac2666956c50&language=en-us&host=art-gallery.api.hbo.com&w=Infinity' />} />

          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
