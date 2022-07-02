import React from 'react';
import CompanyIcon from '../../Assets/Icons/bi_building.svg';
import LocationIcon from '../../Assets/Icons/carbon_location-filled.svg';

export default function Experience() {
  return (
    <div className='work-section'>
      <h2>Work Experience</h2>

      <div className='work-list'>
        <div className='work-item work-item-1'>

          <h3>Customer Service Agent</h3>
          
          <div className='company-name'>
            <img src={CompanyIcon} alt="company-icon" />
            <p>Capgemini</p>
          </div>

          <div className='city-name'>
            <img src={LocationIcon} alt="company-icon" />
            <p>Iasi</p>
          </div>

          <p>November 2019 - Present</p>
        </div>
      </div>
    </div>
  )
}
