import React, { useEffect, useState } from 'react';
import headerImage from '../../Assets/Images/Bkg-front.svg';

export default function Header() {

  const [sideMenu, setSideMenu] = useState(false);
  const [header, setHeader] = useState();
  const [sideMenuIcon, setSideMenuIcon] = useState();


  /* Assigning the DOM with set state and useEffect hook */
  
  useEffect(() => {
    setHeader(document.querySelector('header'));
    setSideMenuIcon(document.querySelector('.mobile-menu-close'));
  }, []);


  const toggleSideMenu = () => {
    if(sideMenu === false) {
      setSideMenu(true);
      header.classList.add('open-header-menu');
      sideMenuIcon.classList.add('menu-icon-toggle');
    } else {
      setSideMenu(false);
      header.classList.remove('open-header-menu');
      sideMenuIcon.classList.remove('menu-icon-toggle');
    }
  };

  const loadHeader = () => {
    header.classList.add('load-header');
  };


  return (
    <header onLoad={loadHeader}>
      <div className='side-bkg'>
        <img draggable={false} src={headerImage} alt="Header-background" />
      </div>
      <div className='header-content'>
        <div className='mobile-menu-close' onClick={toggleSideMenu}>
          <div className='bar bar-1'></div>
          <div className='bar bar-2'></div>
          <div className='bar bar-3'></div>
        </div>

        <div className='profile-photo'></div>
        <h3>Alex Benta</h3>
        <p>UI/UX Developer</p>

        <ul className='page-sections'>
          <li className='landing-item'>
            <a href='#landing-section'>Home</a>
          </li>
          <li className='about-item'>
            <a href='#about-section'>About</a>
          </li>
          <li className='services-item'>
            <a href='#services-section'>Services</a>
          </li>
          <li className='skills-item'>
            <a href='#skills-section'>Skills</a>
          </li>
          <li className='education-item'>
            <a href='#education-section'>Education</a>
          </li>
          <a href='#work-section'>
            <li className='work-item'>
              Work
            </li>
          </a>
          <a href='#projects-section'>
            <li className='projects-item'>
              Projects
            </li>
          </a>
          <a href='#footer'>
            <li className='footer-item'>
              Contact
            </li>
          </a>
        </ul>
      </div>
    </header>
  )
}
