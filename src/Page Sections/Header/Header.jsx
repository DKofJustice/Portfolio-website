import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='side-bkg'></div>
      <div className='header-content'>
        <div className='profile-photo'></div>
        <h3>Alex Benta</h3>
        <p>Ui/UX Developer</p>

        <ul className='page-sections'>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Skills</a></li>
          <li><a>Education</a></li>
          <li><a>Work</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </header>
  )
}
