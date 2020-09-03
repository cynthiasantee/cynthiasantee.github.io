import React  from 'react';
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { theme } from '../theme';
import {Card, LinkContainer, FlexColumnStyle } from "../styles";
import { InfoCard } from '../components/InfoCard';

const AboutMe = () => {
    return(
        <Container>
          <Card>
            <InfoCard>
              <h3>About me</h3>
              <p>
                Web Developer Enthusiast Specializing in Front End
              </p>
              <p>After completing my Bachelor's in Nutrition in Brazil, I worked as a community manager at an indie game company, where I wrote my first code.</p>
              <p>
              Since then, I have built several projects by applying my knowledge of React, TypeScript, data structures, algorithms, and other technologies.
              </p>
            </InfoCard>
          </Card>
          
          <CardContainer>
            <AboutMeCard className="first">
            <CodeIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></CodeIcon>
              <LinkContainer>
                <p>Front End</p>
              </LinkContainer>
            </AboutMeCard>
            <AboutMeCard className="second">
              <SchoolIcon style={{fontSize:"100px", color: `${theme.fontColor}`}}></SchoolIcon> 
              <LinkContainer>
              <p>Bachelor in Nutrition</p>
              </LinkContainer>
            </AboutMeCard>
            <AboutMeCard className="third" onClick={()=> window.open("https://pubmed.ncbi.nlm.nih.gov/31329496/", "_blank")}>
              <ReceiptIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></ReceiptIcon>
              <LinkContainer>
                  <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p>Published Article</p></div>
              </LinkContainer>
            </AboutMeCard>
          </CardContainer>
        </Container>  
    )
};

export default AboutMe;

const Container = styled.div`
    ${FlexColumnStyle}
    min-height: calc(100vh - ${navBarHeight}px);
`

const CardContainer = styled.div`
  display flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const AboutMeCard = styled(Card)`
  width: 250px;
  flex-wrap: wrap;
`;