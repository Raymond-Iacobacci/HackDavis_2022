import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className='container align-items-center'> 
        <Router> 

          <Routes>
            <Route exact path='/' component={<Home/>}/>

          </Routes>



        </Router>
      </div>
    </div>
  );
}

export default App;
