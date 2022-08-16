import { React, useState, useEffect, useRef } from 'react';
import skillInfos from './skillInfos';
import SkillCard from './SkillCard';

export default function Skills() {

  const [isIntersecting, setIsIntersecting] = useState(false);

  const skillsRef = useRef(null);


  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };

  const aboutObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    aboutObserver.observe(skillsRef.current);

    return () => aboutObserver.disconnect();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsRef]);

  return (
    <article className={`skills-section ${isIntersecting ? 'skills-animation' : ''}`} 
    id='skills-section'
    ref={skillsRef}>
      <h2>Skills</h2>
      <p className='skills-subtitle'>Here is the tech stack I know. These are the technologies I am most comfortable using right now. As time passes, I will acquire new technologies, to be able to use them in future projects.</p>

      <div className='skill-card-div'>
        {
          skillInfos.map(skillInfo => {
            return <SkillCard 
            title={skillInfo.title} 
            skills={skillInfo.skills}/>
          })
        }
      </div>
    </article>
  )
}
