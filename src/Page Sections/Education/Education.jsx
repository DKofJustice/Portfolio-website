import React from 'react';
import HighschoolIcon from '../../Assets/Icons/icons8_diploma-1.svg';

export default function Education() {
  return (
    <div className='education-section' id='education-section'>
      <h2>Education</h2>

      <div className='education-level'>
        <h3>High School Diploma</h3>
        <img src={HighschoolIcon} alt="highschool-icon" />
        <p>Vasile Alecsandri Highschool Iasi</p>
        <p>September 2012 - May 2016</p>
      </div>
    </div>
  )
}
