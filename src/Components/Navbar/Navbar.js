import './Navbar.css';

import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className='navbar navbar-expand-lg navbar-light bg-light py-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'><img src='https://static.wixstatic.com/media/f59373_34e4f0511de04843975120b97881bcf9~mv2.png/v1/crop/x_0,y_18,w_2588,h_584/fill/w_101,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2010Icon%20location_edited.png' alt='Esther'/></NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>Inicio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/getStartedPage'>¡Ey! Salvemos el planeta</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/projectsPage'>Proyectos</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/compensatorsPage'>Compensadores</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/footprintCalculator'><button className='btn btn-primary' onClick={() => console.log('hola')} >¡Calculá tu huella!</button></NavLink>
            </li>
            <li className='nav-item dropdown'>
              <NavLink className='nav-link dropdown-toggle' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false' to='/'>Más</NavLink>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <li><a className='dropdown-item' href='/FAQsPage'>FAQs</a></li>
                <li><a className='dropdown-item' href='/'>Another action</a></li>
                <li><a className='dropdown-item' href='/'>Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
