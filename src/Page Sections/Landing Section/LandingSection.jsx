import React from 'react';
import LandingBackground from '../../Assets/Images/Background.jpg';
//import DownloadIcon from '../../Assets/Icons/akar-icons_download.svg';
import DownArrow from '../../Assets/Icons/Down Arrow.svg';
import { useRef, useState, useEffect } from 'react';

export default function LandingSection() {

  const [isIntersecting, setIsIntersecting] = useState(false);


  const landingRef = useRef(null);

  /* Setting Intersection Observer to create
  animation on scroll view */

  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };
  
  //Observer
  const observer = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    observer.observe(landingRef.current);

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landingRef, options]);

  
  return (
    <div className='landing-section' id='landing-section'
    ref={landingRef}>

      <div className={`landing-section-background 
      ${ isIntersecting ? 'landing-bkg-animation' : '' }`}>

        <img draggable={false} src={LandingBackground} 
        alt="Landing-page" />

      </div>

      <div className='landing-content'>
        <h1 className={ isIntersecting ? 'h1-title-animation' : '' }>
          Hi, I am Alex
        </h1>
        <p className={ isIntersecting ? 'p-title-animation' : '' }>
          I create web apps for you
        </p>

        {/*
        <button
        className={ isIntersecting ? 'CV-animation' : '' }>
          Download CV
          <img src={DownloadIcon} alt="download-icon" />
        </button>
        */}

        <a href="#about-section">
          <img className={ isIntersecting ? 'down-link-animation' : '' }
          src={DownArrow} alt="down-arrow" />
        </a>
      </div>
    </div>
  )
}
