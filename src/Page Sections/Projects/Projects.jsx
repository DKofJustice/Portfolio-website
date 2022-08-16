import React from 'react';
import MexicanDishImage from '../../Assets/Images/burrito-dish 1.jpg';
import CalculatorImage from '../../Assets/Images/c1 1.jpg';

export default function Projects() {
  return (
    <article className='projects-section' id='projects-section'>
      <h2>Projects</h2>

      <div className='project-list'>
        <a href="https://hilarious-pothos-b8ec37.netlify.app/"
        target='_blank' rel='noreferrer'>
          <div className='project project-1'>
            <span className='tooltiptext'>Check out the mexican restaurant website</span>
            <img src={MexicanDishImage} alt="mexican dish" />
          </div>
        </a>

        <a href="https://alex-calculator.netlify.app/"
        target='_blank' rel='noreferrer'>
          <div className='project project-2'>
            <span className='tooltiptext'>Check out the calculator website</span>
            <img src={CalculatorImage} alt="Calculator" />
          </div>
        </a>
      </div>
    </article>
  )
}
