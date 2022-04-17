import React from 'react'; 

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
           
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://nicfv.github.io/Renewable-Energy-Farm/">REDC1</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Renewable-Energy-Farm/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/turbineData">Turbine Data</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Team Bio's
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/aboutUs/Nic">Nic's Bio</a></li>
                  <li><a className="dropdown-item" href="/aboutUs/norman">Norman's Bio</a></li>
                  <li><a className="dropdown-item" href="/aboutUs/raymon">Raymon's Bio</a></li>
                  <li><a className="dropdown-item" href="/aboutUs/jorge">Jorge's Bio</a></li>
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