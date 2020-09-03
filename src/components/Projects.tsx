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
            <Card className="first"></Card>
            <Card className="second"></Card>
            <Card className="third"></Card>
          </CardContainer>
      </Container>
    )
});

export default Projects;

// ref={projects}

const Container = styled.div`
    ${FlexColumnStyle}
    min-height: calc(100vh - ${navBarHeight}px);
    // border: 1px solid black;
`

const Card = styled.div`
    ${CardStyle}
`

const CardContainer = styled.div`
    ${CardContainerStyle}
`
const InfoContainer = styled.div`
    ${InfoContainerStyle}
`
