import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { ContainerStyled } from "./styles/ContainerStyled"
import { navBarHeight } from "./util/navBarHeight"
import Nav from "./components/Nav"
import Image from "./components/Image"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


export type Section = 'about' | 'projects' | 'contact' | 'none';

export const aboutMe = React.createRef<HTMLDivElement>();
export const projects = React.createRef<HTMLDivElement>()
export const contact = React.createRef<HTMLDivElement>();


function App() {

  const [currentSection, setCurrentSection] = React.useState<Section>('about');

  let aboutMeTop= 0;
  let projectsTop = 0;
  let contactTop = 0;

  useEffect(() => {
    aboutMeTop =  aboutMe.current?.offsetTop || 0;
    projectsTop = projects.current?.offsetTop || 0;
    contactTop = contact.current?.offsetTop || 0;
  }, []);

  const getSection = (): Section => {
    const windowTop = window.pageYOffset + navBarHeight;
    
    if (window.pageYOffset === 0) {
      return 'none'
    } else if (windowTop < aboutMeTop) {
      return 'about';
    } else if (windowTop < projectsTop) {
      return 'projects';
    } else {
      return 'contact';
    }
  }

  useLayoutEffect(() => {
    const handleScroll = (e: any) => {
      console.log(getSection())
      setCurrentSection(getSection());
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



 
  return (
    <ContainerStyled>
      <Nav section={currentSection} ></Nav>
      <Image></Image>
      <AboutMe ref={aboutMe}></AboutMe>
      <Projects ref={projects}></Projects>
      <Contact ref={contact}></Contact>
    </ContainerStyled>
  );
}

export default App;