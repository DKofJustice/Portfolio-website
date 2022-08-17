import AboutSection from 'Page Sections/About Section/AboutSection';
import Education from 'Page Sections/Education/Education';
import Experience from 'Page Sections/Experience/Experience';
import Footer from 'Page Sections/Footer/Footer';
import Projects from 'Page Sections/Projects/Projects';
import Services from 'Page Sections/Services/Services';
import Skills from 'Page Sections/Skills/Skills';
import LandingSection from 'Page Sections/Landing Section/LandingSection';
import React from 'react'

export default function Homepage() {

  return (
    <div className='homepage-menu'>
      <LandingSection/>
      <Services/>
      <AboutSection/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}
