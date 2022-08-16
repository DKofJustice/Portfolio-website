import { React, useState, useRef, useEffect } from 'react';
import serviceCards from './ServicesCardInfo';
import InfoCard from './../../Components/Info Card/InfoCard';

export default function Services() {

  const [isIntersecting, setIsIntersecting] = useState(false);

  const servicesRef = useRef(null);


  //Observer Options
  const options = {
    rootMargin: '20px',
    threshold: 0.5
  };

  const aboutObserver = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    
    aboutObserver.observe(servicesRef.current);

    return () => aboutObserver.disconnect();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesRef]);

  return (
    <article className={`services-section ${isIntersecting ? 'services-animation' : ''}`}
    id='services-section'
    ref={servicesRef}>
      <h2>Services</h2>
      <p>Here are the services I offer</p>

      <div className='service-cards'>
          {
            // InfoCard component is found in the Components/Info Card folder
            serviceCards.map(serviceCard => <InfoCard 
              image={serviceCard.cardImage}
              header={serviceCard.header} 
              text={serviceCard.text}
              cardType={serviceCard.cardType}/>)
          }
      </div>
    </article>
  )
}
