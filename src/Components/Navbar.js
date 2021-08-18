import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
  <>
  <nav className='avbar'>
      <div className='navbar-container'>

        <Link to='/' className='navbar-logo'>

            Greenhouse.lk <i className='fab fa-typo3'/>
        </Link>
      </div>

  </nav>

</>

  );
}

export default Navbar ;