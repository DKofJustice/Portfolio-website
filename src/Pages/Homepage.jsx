import AboutSection from 'Page Sections/About Section/AboutSection';
import Education from 'Page Sections/Education/Education';
import Experience from 'Page Sections/Experience/Experience';
import Footer from 'Page Sections/Footer/Footer';
import Projects from 'Page Sections/Projects/Projects';
import Services from 'Page Sections/Services/Services';
import Skills from 'Page Sections/Skills/Skills';
import React from 'react'
import Header from '../Page Sections/Header/Header';

export default function Homepage() {
  return (
    <>
      <Header/>
      <AboutSection/>
      <Services/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  )
}
