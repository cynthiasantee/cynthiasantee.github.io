import React from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import {Card, FlexColumnStyle, FlexStyle } from "../styles"
import { fontColor } from '../theme';
import courtHoops from '../images/courthoops.png';
import courtHoops2 from '../images/courthoops2.png';
import courtHoops3 from '../images/courthoops3.png';
import courtHoops4 from '../images/courthoops4.png';

const Projects = () => {
    return(
      <Container>
        <h1>Projects</h1>
          <CardContainer >
            <ProjectCard>
              <Title>CourtHoops</Title>
              <p><a href="https://www.kickstarter.com/projects/courthoops/courthoops-a-new-online-basketball-management-game">CourtHoops</a> is a modern online basketball management game designed for the modern web. Innovative, responsive, and immersive, the game aims to provide a whole new experience. Built with modern technologies like React, Redux, Node, and Rust.</p>
              <p>As the sole UI developer on the team, I'm responsible for delivering the web app. The beta is scheduled to launch in late September.</p>
            </ProjectCard>
            <CardContainer >
            <ProjectCard>
                <img alt="court-hoops-game" src={courtHoops} />
                <img alt="court-hoops-game-2" src={courtHoops2} />
                <img alt="court-hoops-game-3" src={courtHoops3} />
                <img alt="court-hoops-game-4" src={courtHoops4} />
            </ProjectCard>
            </CardContainer>
          </CardContainer>
          <CardContainer >
            <CardContainer >
            <ProjectCard>
                <img className="full" alt="court-hoops-game" src="https://raw.githubusercontent.com/cynthiasantee/tournament-bracket-tree/master/src/images/basic.png" />
            </ProjectCard>
            </CardContainer>
            <ProjectCard>
              <Title>tournament-bracket-tree</Title>
              <p>One of CourtHoops requirements was to have a visual component for the tournament bracket. Existing solutions did not satisfy our requirements, so I started rolling out a custom one. During development, I realized the approach could be generalized into a reusable package.</p>
              <p><a href="https://www.npmjs.com/package/tournament-bracket-tree">tournament-bracket-tree</a> is an npm package for visualizing any kind of binary tree.</p>
            </ProjectCard>
          </CardContainer>
          <Images>
              <img alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
              <img alt="ts" src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"/>
              <img alt="redux" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"/>
              <img alt="styled-components" src="https://www.styled-components.com/atom.png"/>
              <img alt="html" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" />
              <img alt="css" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" />
              <img alt="npm" src="https://authy.com/wp-content/uploads/npm-logo.png" />
          </Images>
      </Container>
    )
};

export default Projects;

const Title = styled.h3`
margin: 0;
padding: 5px 0;
text-align: center;
`

const Container = styled.div`
    ${FlexColumnStyle}
    min-height: calc(100vh - ${navBarHeight}px);
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > * {
      flex: 1;
    }
`;

const ProjectCard = styled(Card)`
  background-color: none;//${props => props.theme.tertiaryColor};
  box-shadow: none;
  color: ${fontColor('secondary')};
  flex-direction: row;
  flex-wrap: wrap;

  img {
    margin: 10px;
    width: 45%;
    height: 45%;
  }

  & .full {
    height: auto;
    width: 100%;
  }
`;

const Images = styled.div`
    ${FlexStyle}
    flex-wrap: wrap;
    width: 100%;

    img {
      flex: 1;
      flex-grow: 0;
      margin: 20px;
      width: auto;
      height: 100px;
    }
`;