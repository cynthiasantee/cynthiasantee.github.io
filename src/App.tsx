import React from 'react';
import { ContainerStyled } from "./styles/ContainerStyled"
import Nav from "./components/Nav"
import Image from "./components/Image"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Section } from './components/Section';
import styled from 'styled-components/macro';
import { breakpoint } from './util/breakingPoints';

export const aboutMe = React.createRef<HTMLDivElement>();
export const contact = React.createRef<HTMLDivElement>();
export const projects = React.createRef<HTMLDivElement>();


function App() {

  return (
    <ContainerStyled>
        <Nav></Nav>
        <Image></Image>
          <AboutMeSection ref={aboutMe}>
            <AboutMe></AboutMe>
          </AboutMeSection>

          <ProjectSection ref={projects}>
            <Projects></Projects>
          </ProjectSection>

          <Section ref={contact}>
            <Contact></Contact>  
          </Section>
    </ContainerStyled>
  );
}

const AboutMeSection = styled(Section)`
  background-color: ${props => props.theme.offWhite};
`;

const ProjectSection = styled(Section)`
  background-color: white;
  @media ${breakpoint.mobileTablet} {
    margin-top: 20px;
  }
`;

export default App;