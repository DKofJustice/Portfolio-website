import { React, useState, useEffect, useRef } from 'react';
import HighschoolIcon from '../../Assets/Icons/icons8_diploma-1.svg';

export default function Education() {

  const [isIntersecting, setIsIntersecting] = useState(false);

  const educationRef = useRef(null);


  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };

  const aboutObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    aboutObserver.observe(educationRef.current);

    return () => aboutObserver.disconnect();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationRef]);

  return (
    <div className={`education-section ${isIntersecting ? 'education-animation' : ''}`} 
    id='education-section'
    ref={educationRef}>
      <h2>Education</h2>

      <div className='education-level Bachelor'>
        <p>College Student</p>
        <div className='education-content'>
          <div className='highschool-location'>
            <img src={HighschoolIcon} alt="highschool-icon" />
            <p>Economics and Bussiness Adminstration Faculty,
              <br/><br/>Alexandru Ioan Cuza College Iasi
            </p>
          </div>
          <p>October 2016 - May 2017</p>
        </div>
      </div>

      <div className='education-level highschool'>
        <p>High School Diploma</p>
        <div className='education-content'>
          <div className='highschool-location'>
            <img src={HighschoolIcon} alt="highschool-icon" />
            <p>Vasile Alecsandri Highschool Iasi</p>
          </div>
          <p>September 2012 - May 2016</p>
        </div>
      </div>
    </div>
  )
}
