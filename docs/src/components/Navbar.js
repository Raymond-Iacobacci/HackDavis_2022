import React from 'react';
import * as GiIcons from 'react-icons/gi'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className='navbar-brand'><GiIcons.GiPaperWindmill/></a>
          <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}>REDC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={`${process.env.PUBLIC_URL}/`}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`${process.env.PUBLIC_URL}/turbineData`}>Turbine Data</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Team Bio's
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href={`${process.env.PUBLIC_URL}/aboutUs/Nic`}>Nic's Bio</a></li>
                  <li><a className="dropdown-item" href={`${process.env.PUBLIC_URL}/aboutUs/Norman`}>Norman's Bio</a></li>
                  <li><a className="dropdown-item" href={`${process.env.PUBLIC_URL}/aboutUs/Raymon`}>Raymon's Bio</a></li>
                  <li><a className="dropdown-item" href={`${process.env.PUBLIC_URL}/aboutUs/Jorge`}>Jorge's Bio</a></li>
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