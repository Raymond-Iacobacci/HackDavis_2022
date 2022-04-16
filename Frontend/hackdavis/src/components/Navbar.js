import React from 'react'; 

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
           
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">REDC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/turbineData">Turbine Data</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Team Bio's
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Nic's Bio</a></li>
                  <li><a className="dropdown-item" href="#">Norman's Bio</a></li>
                  <li><a className="dropdown-item" href="#">Raymon's Bio</a></li>
                  <li><a className="dropdown-item" href="#">Jorge's Bio</a></li>
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