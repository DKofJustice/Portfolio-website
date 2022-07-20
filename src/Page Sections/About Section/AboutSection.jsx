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
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
        <br/><br/><br/>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      </div>
    </article>
  )
}
