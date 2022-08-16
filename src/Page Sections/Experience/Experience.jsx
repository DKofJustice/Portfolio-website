import { React, useState, useEffect, useRef } from 'react';
import CompanyIcon from '../../Assets/Icons/bi_building.svg';
import LocationIcon from '../../Assets/Icons/carbon_location-filled.svg';

export default function Experience() {

  const [isIntersecting, setIsIntersecting] = useState(false);

  const workRef = useRef(null);


  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };

  const aboutObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    aboutObserver.observe(workRef.current);

    return () => aboutObserver.disconnect();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workRef]);

  return (
    <div className={`work-section ${isIntersecting ? 'work-animation' : ''}`} 
    id='work-section'
    ref={workRef}>
      <h2>Work Experience</h2>

      <div className='work-list'>
        <div className='workplace workplace-1'>

          <p>Customer Service Agent</p>
          
          <div className='company-city-time'>
            <div className='company-and-city'>
              <div className='company-name'>
                <img src={CompanyIcon} alt="company-icon" />
                <p>Capgemini</p>
              </div>

              <div className='city-name'>
                <img src={LocationIcon} alt="company-icon" />
                <p>Iasi</p>
              </div>
            </div>

            <p>November 2019 - Present</p>
          </div>
        </div>
      </div>
    </div>
  )
}
