import React from 'react'
import swal from 'sweetalert';
import { Link, NavLink } from 'react-router-dom'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from '../assets/images/Ttomas.png'

import './Sidebar.css'

const Sidebar = () => {

  const discordButton = () => {
    swal({
      title: "Discord ID",
      text: "ZYX001#3205",
      icon: "success",
      button: "Done!"
    })
  }
  
  return (
    <div className='nav-bar'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <nav className='navbar-nav'>
      <NavLink exact="true" activeclassname="active" className="home-link" to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser}/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
      </nav>
      <div className='navbar-links'>
        <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/tom%C3%A1s-li%C3%B1an/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" rel='noopener noreferrer' href="https://github.com/Tomas-Li/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <button className='discButton' onClick={discordButton}>
          <FontAwesomeIcon icon={faDiscord} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar