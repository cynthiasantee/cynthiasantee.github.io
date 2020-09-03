import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { ContainerStyled } from "./styles/ContainerStyled"
import { navBarHeight } from "./util/navBarHeight"
import Nav from "./components/Nav"
import Image from "./components/Image"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Section } from './components/Section';
import styled from 'styled-components';


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
        <AboutMeSection ref={aboutMe}>
          <AboutMe></AboutMe>
        </AboutMeSection>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('projects')}>
        <ProjectSection ref={projects}>
          <Projects ></Projects>
        </ProjectSection>
      </VisibilitySensor>
      <VisibilitySensor onChange={(isVisible: boolean) => isVisible && setCurrentSection('contact')}>
        <Section ref={contact}>
          <Contact></Contact>  
        </Section>
      </VisibilitySensor>
    </ContainerStyled>
  );
}

const AboutMeSection = styled(Section)`
  background-color: ${props => props.theme.secondaryColor};
`;

const ProjectSection = styled(Section)`
  background-color: white;
`;

export default App;