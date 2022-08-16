import { React, useRef, useState, useEffect }from 'react'

export default function AboutSection() {

  /* Setting Intersection Observer to create
  animation on scroll view */

  const [isIntersecting, setIsIntersecting] = useState(false);

  const aboutRef = useRef(null);


  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };

  const aboutObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    aboutObserver.observe(aboutRef.current);

    return () => aboutObserver.disconnect();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutRef]);

  return (
    <article className='about-section' id='about-section'
    ref={aboutRef}>
      
      <div className='about-background'></div>
      
      <div className={`about-content 
      ${isIntersecting ? 'about-animation' : ''}`}>
        <h2>About Me</h2>
        <h3>Who am I?</h3>
        <p>Hi, I am a web developer first of all, designing and creating websites for customers, with some attention and care for aesthetics, so to create visually appealing websites and projects. This can be reflected in some of the later projects I have developed, where I am increasing my skills as a developer and designer.
        <br/><br/><br/>In addition to this, I am also learning and expanding my knowledge in other areas of software, such as 3D Design and creating desktop and mobile apps. Though I am starting out on these, I am continuously learning and practicing in that regard, so to help any potential customer in that regard.</p>
      </div>
    </article>
  )
}
