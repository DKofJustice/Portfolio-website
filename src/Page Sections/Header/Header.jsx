import React, { useEffect, useState } from 'react';
import headerImage from '../../Assets/Images/Bkg-front.svg';
import ProfileImage from '../../Assets/Images/Portfolio-profile-picture.JPEG';

export default function Header() {

  const [sideMenu, setSideMenu] = useState(false);
  const [header, setHeader] = useState();
  const [sideMenuIcon, setSideMenuIcon] = useState();


  /* Assigning the DOM with set state and useEffect hook */
  
  useEffect(() => {
    setHeader(document.querySelector('header'));
    setSideMenuIcon(document.querySelector('.mobile-menu-close'));
  }, []);

  console.log(header);

  const toggleSideMenu = (elementSection) => {

    if(window.innerWidth <= 992 && sideMenu === false) {

      setSideMenu(true);
      header.classList.add('open-header-menu');
      sideMenuIcon.classList.add('menu-icon-toggle');

    } else if (window.innerWidth <= 992 && sideMenu === true){
      
      setSideMenu(false);
      header.classList.remove('open-header-menu');
      sideMenuIcon.classList.remove('menu-icon-toggle');

    }
  };



  return (
    <header>
      <div className='side-bkg'>
        <img draggable={false} src={headerImage} alt="Header-background" />
      </div>
      <div className='header-content'>
        <div className='mobile-menu-close' onClick={toggleSideMenu}>
          <div className='bar bar-1'></div>
          <div className='bar bar-2'></div>
          <div className='bar bar-3'></div>
        </div>

        <div className='profile-photo'>
          <img src={ProfileImage} alt="profile" />
        </div>

        <h3>Alex Benta</h3>
        <p>UI/UX Developer</p>

        <ul className='page-sections'>
        <a href='#landing-section' onClick={toggleSideMenu}>
          <li className='landing-item' onClick={toggleSideMenu}>
            Home
          </li>
        </a>
          <a href='#about-section' onClick={toggleSideMenu}>
            <li className='about-item'>
              About
            </li>
          </a>
          <a href='#services-section' onClick={toggleSideMenu}>
            <li className='services-item'>
              Services
            </li>
          </a>
          <a href='#skills-section' onClick={toggleSideMenu}>
            <li className='skills-item'>
              Skills
            </li>
          </a>
          <a href='#education-section' onClick={toggleSideMenu}>
            <li className='education-item'>
              Education
            </li>
          </a>
          <a href='#work-section' onClick={toggleSideMenu}>
            <li className='work-item'>
              Work
            </li>
          </a>
          <a href='#projects-section' onClick={toggleSideMenu}>
            <li className='projects-item'>
              Projects
            </li>
          </a>
          <a href='#footer' onClick={toggleSideMenu}>
            <li className='footer-item'>
              Contact
            </li>
          </a>
        </ul>
      </div>
    </header>
  )
}
