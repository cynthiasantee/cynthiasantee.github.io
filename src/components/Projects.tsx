import React from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import {Card, FlexColumnStyle } from "../styles"
import { InfoCard } from './InfoCard';
import { fontColor } from '../theme';

const Projects = () => {
    return(
      <Container>
        <InfoCard>
        <h3>Projects</h3>
        </InfoCard>
          <CardContainer >
            <ProjectCard className="first">
              <Title>CourtHoops</Title>
            {/* <ProjectContainer> */}
              <ProjectInfo>
              <ul>
                    <li>Basketball managment game</li>
                    <li>Sole front-end developer</li>
                    <li style={{listStyle: "none", fontWeight: "bold"}}>Technologies used:</li>
                    <li style={{listStyleType: "circle"}}>React</li>
                    <li style={{listStyleType: "circle"}}>Typescript</li>
                    <li style={{listStyleType: "circle"}}>Reux</li>
                    <li style={{listStyleType: "circle"}}>HTTP</li>
                    <li style={{listStyleType: "circle"}}>styled-components</li>
                    <li style={{listStyleType: "circle"}}>Material-UI</li>

              </ul>
              </ProjectInfo>
              <ProjectImage>
                image
              </ProjectImage>
              {/* </ProjectContainer> */}
            </ProjectCard>

            <ProjectCard className="second">
              <Title>tournament-breacket-tree</Title>
              {/* <ProjectContainer> */}
              <ProjectInfo>
                </ProjectInfo>
                <ProjectImage>
                image
                </ProjectImage>
                {/* </ProjectContainer> */}
            </ProjectCard>
          
          </CardContainer>
      </Container>
    )
};

export default Projects;

const Title = styled.h3`
margin: 0;
padding: 5px 0;
text-align: center;
`

const ProjectInfo = styled.div`
  flex: 1;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  li {
    padding: 3px 0;
  }
  font-size: 18px;
`

const ProjectImage = styled.div`
  flex: 1;
`

const Container = styled.div`
    ${FlexColumnStyle}
    min-height: calc(100vh - ${navBarHeight}px);
`

const CardContainer = styled.div`
    display: flex;

    & > * {
      flex: 1;
    }
`;

const ProjectCard = styled(Card)`
  background-color: ${props => props.theme.primaryColor};
  color: ${fontColor('primary')};
`;