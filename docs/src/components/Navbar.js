import React from 'react'; 

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
           
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://nicfv.github.io/Renewable-Energy-Farm/">REDC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://nicfv.github.io/Renewable-Energy-Farm/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://nicfv.github.io/turbineData">Turbine Data</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Team Bio's
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://nicfv.github.io/aboutUs/nic">Nic's Bio</a></li>
                  <li><a className="dropdown-item" href="https://nicfv.github.io/aboutUs/norman">Norman's Bio</a></li>
                  <li><a className="dropdown-item" href="https://nicfv.github.io/aboutUs/raymon">Raymon's Bio</a></li>
                  <li><a className="dropdown-item" href="https://nicfv.github.io/aboutUs/jorge">Jorge's Bio</a></li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
    </nav>
            
        )
    }


}

export default Navbar;