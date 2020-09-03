import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
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
 
  return (
    <ContainerStyled>
      <Nav section={currentSection} ></Nav>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('none')}>
        <Image></Image>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('about')}>
        <AboutMe ref={aboutMe}></AboutMe>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('projects')}>
        <Projects ref={projects}></Projects>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('contact')}>
        <Contact ref={contact}></Contact>
      </VisibilitySensor>
    </ContainerStyled>
  );
}

export default App;