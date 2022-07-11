import React from 'react';
import MexicanDishImage from '../../Assets/Images/burrito-dish 1.jpg';
import CalculatorImage from '../../Assets/Images/c1 1.jpg';

export default function Projects() {
  return (
    <article className='projects-section' id='projects-section'>
      <h2>Projects</h2>

      <div className='project-list'>
        <div className='project project-1'>
          <img src={MexicanDishImage} alt="mexican dish" />
        </div>

        <div className='project project-2'>
          <img src={CalculatorImage} alt="Calculator" />
        </div>
      </div>
    </article>
  )
}
