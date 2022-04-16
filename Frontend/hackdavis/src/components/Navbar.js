import React from 'react'; 

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
           
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">REDC</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/turbineData">Turbine Data</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Team Bio's
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Nic's Bio</a></li>
                  <li><a class="dropdown-item" href="#">Norman's Bio</a></li>
                  <li><a class="dropdown-item" href="#">Raymon's Bio</a></li>
                  <li><a class="dropdown-item" href="#">Jorge's Bio</a></li>
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