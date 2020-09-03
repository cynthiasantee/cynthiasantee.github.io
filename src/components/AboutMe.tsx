import React  from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { theme } from '../theme';
import { InfoContainerStyle, CardContainerStyle, CardStyle, LinkContainerStyle, FlexColumnStyle } from "../styles/GeneralStyles"

const AboutMe = React.forwardRef<HTMLDivElement>( (props, ref) => {

    return(
        <Container ref={ref}>
        <InfoContainer>
          <h3>About me</h3>
          <p>
            Web Developer Enthusiast Specializing in Front End
          </p>
          <p>After completing my Bachelor's in Nutrition in Brazil, I worked as a community manager at an indie game company, where I wrote my first code.</p>
          <p>
          Since then, I have built several projects by applying my knowledge of React, TypeScript, data structures, algorithms, and other technologies.
          </p>
        </InfoContainer>
        <CardContainer>
        <Card className="first">
          <CodeIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></CodeIcon>
            <LinkContainer>
              <p>Front End</p>
            </LinkContainer>
          </Card>
          <Card className="second">
            <SchoolIcon style={{fontSize:"100px", color: `${theme.fontColor}`}}></SchoolIcon> 
            <LinkContainer>
            <p>Bachelor in Nutrition</p>
            </LinkContainer>
          </Card>

          <Card className="third" onClick={()=> window.open("https://pubmed.ncbi.nlm.nih.gov/31329496/", "_blank")}>
            <ReceiptIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></ReceiptIcon>
            <LinkContainer>
                <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p>Published Article</p></div>
            </LinkContainer>
          </Card>

        </CardContainer>
        </Container>  
    )
});

export default AboutMe;

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

const LinkContainer = styled.div`
    ${LinkContainerStyle}
`