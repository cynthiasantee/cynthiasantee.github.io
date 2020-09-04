import React  from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { theme, fontColor } from '../theme';
import {Card, LinkContainer, FlexColumnStyle, FlexStyle } from "../styles";

const AboutMe = () => {
  const iconStyle = {fontSize:"100px", color: `${theme.darkFontColor}`}

    return(
        <Container>
          <CardContainer  >
            <BigAboutMeCard>
                <h1>About me</h1>
                <p>
                  Web Developer Enthusiast Specializing in Front End.
                </p>
                <p>After completing my Bachelor's in Nutrition in Brazil, I worked as a community manager at an indie game company, where I wrote my first code.</p>
                <p>
                Since then, I have built several projects by applying my knowledge of React, TypeScript, data structures, algorithms, and other technologies.
                </p>
            </BigAboutMeCard>
          </CardContainer>
          <CardContainer>
            <AboutMeTileCard className="first">
            <CodeIcon style={iconStyle}></CodeIcon>
              <LinkContainer>
                <p>Front End</p>
              </LinkContainer>
            </AboutMeTileCard>
            <AboutMeTileCard className="second">
              <SchoolIcon style={iconStyle}></SchoolIcon> 
              <LinkContainer>
              <p>Bachelor's in Nutrition</p>
              </LinkContainer>
            </AboutMeTileCard>
            <AboutMeTileCard className="third" onClick={()=> window.open("https://pubmed.ncbi.nlm.nih.gov/31329496/", "_blank")}>
              <ReceiptIcon style={iconStyle}></ReceiptIcon>
              <LinkContainer>
                  <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p>Published Article</p></div>
              </LinkContainer>
            </AboutMeTileCard>
          </CardContainer>
        </Container>  
    )
};

export default AboutMe;

const Container = styled.div`
    ${FlexColumnStyle}
    min-height: calc(100vh - ${navBarHeight}px);

    .third {
      cursor: pointer;
    }


`

const CardContainer = styled.div`
  ${FlexStyle}
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 850px;
`

const AboutMeCard = styled(Card)`
  background-color: white;
  color: ${fontColor('secondary')};
  padding: 20px;
  text-align: center;
`;

const BigAboutMeCard = styled(AboutMeCard)`
  background-color: ${props => props.theme.offWhite};
  border: none;
  box-shadow: none;
`;

const AboutMeTileCard = styled(AboutMeCard)`
  flex: 1;
  flex-wrap: wrap;
  padding: 5px;
 

  p {
    margin: 0;
  }
`;