import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {

  const [click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
  <>
  <nav className='avbar'>
      <div className='navbar-container'>

        <Link to='/' className='navbar-logo'>

        <i class="fa fa-home" aria-hidden="true"></i>Greenhouse.lk
        </Link>
        <div className='menu-icon' onClick={handleClick}>

          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>

        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li> 
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              home
            </Link>
          </li>
          <li> 
            <Link to='/plants' className='nav-links' onClick={closeMobileMenu}>
              Plants
            </Link>
          </li>
          <li> 
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              About us
            </Link>
          </li>


        </ul>
      </div>

  </nav>

</>

  );
}

export default Navbar ;