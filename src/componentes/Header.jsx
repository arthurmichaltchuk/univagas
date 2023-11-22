import { Link } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
import React from 'react';
import logo from '../images/logo.png';

import { AiFillHome } from "react-icons/ai";

import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  
  const handleClickLogo = () => {
    navigate('/home')
  }


  return (
    <div>

      <nav className='navbar'>
        <Container>
          <div className='logo'>
            <img onClick={handleClickLogo} src={logo} alt="Logo" />
          </div>

          <label className="menu-icon" htmlFor='menu-btn'>
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li><Nav.Link as={Link} to="/" className='btnNavBarIcon'><AiFillHome className='iconsNav' /></Nav.Link></li>
            <li><Nav.Link as={Link} to="/candidaturas" className='btnNavbar'>Candidaturas</Nav.Link></li>
            <li><Nav.Link as={Link} to="/dicas" className='btnNavbar'>Dicas</Nav.Link></li>
            <li><Nav.Link as={Link} to="/mentorias" className='btnNavbar'>Mentorias</Nav.Link></li>
          </ul>
        </Container>
      </nav>
    </div>
  )
}

export default Header;