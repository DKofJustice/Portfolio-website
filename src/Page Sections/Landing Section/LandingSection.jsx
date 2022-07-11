import React from 'react';
import LandingBackground from '../../Assets/Images/Background.jpg';
import DownloadIcon from '../../Assets/Icons/akar-icons_download.svg';
import DownArrow from '../../Assets/Icons/Down Arrow.svg';

export default function LandingSection() {
  return (
    <div className='landing-section' id='landing-section'>
      <div className='landing-section-background'>
        <img src={LandingBackground} alt="Landing-page" />
      </div>

      <div className='landing-content'>
        <h1>Hi, I am Alex</h1>
        <p>I create web apps for you</p>

        <button>Download CV
          <img src={DownloadIcon} alt="download-icon" />
        </button>

        <img src={DownArrow} alt="down-arrow" />
      </div>
    </div>
  )
}
