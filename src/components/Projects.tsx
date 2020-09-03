import React from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import { InfoContainerStyle, CardContainerStyle, CardStyle, FlexColumnStyle } from "../styles/GeneralStyles"

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
      <Container ref={ref}>
        <InfoContainer>
            <h3>Projects</h3>
          </InfoContainer>
          <CardContainer >

          
            <Card className="first">
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
            </Card>

            <Card className="second">
            <Title>tournament-breacket-tree</Title>
            {/* <ProjectContainer> */}
            <ProjectInfo>
              </ProjectInfo>
              <ProjectImage>
              image
              </ProjectImage>
              {/* </ProjectContainer> */}
            </Card>
          
          </CardContainer>
      </Container>
    )
});

export default Projects;

const Title = styled.h3`
margin: 0;
padding: 5px 0;
text-align: center;
`

const ProjectContainer = styled.div`
display: flex;
width: 100%;
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

const Card = styled.div`
    ${CardStyle}
    justify-content: flex-start;
`

const CardContainer = styled.div`
    ${CardContainerStyle}
`
const InfoContainer = styled.div`
    ${InfoContainerStyle}
`
