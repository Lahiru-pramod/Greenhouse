import React, {Component} from 'react';
 import './navbar.css';

 
class App extends Component{
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2 text" href="#"><i class="fa fa-home" aria-hidden="true"></i>Greenhouse</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light fs-4" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fs-4" href="#">Plants</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light fs-4" aria-current="page" href="#">About us</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
export default App;

