import React from 'react';
import styled from 'styled-components/macro';
import { Card, FlexColumnStyle, LinkContainer, FlexStyle } from "../styles"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { navBarHeight } from "../util/navBarHeight";
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { theme } from '../theme';
import { breakpoint } from '../util/breakingPoints';

const Contact = () => {
  const iconStyle = {fontSize:"100px", color: `${theme.darkFontColor}`}
  const pStyle = {margin: 0}
    return(
      <Container>
        <p>
          santeecynthia@gmail.com
        </p>
        <p style={{marginBottom: "30px"}}>
          Walnut Creek, CA
        </p>
        
        <CardContainer>
        <HoverCard className="first" onClick={()=> window.open("https://drive.google.com/file/d/1XpBpZXg3cVqYZj-sw5uL0D98mioa9j2-/view?usp=sharing", "_blank")}>
          <DescriptionIcon style={iconStyle}></DescriptionIcon>
          <LinkContainer>
          <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p style={pStyle}>Resume</p></div>
          </LinkContainer>
        </HoverCard>
          <HoverCard className="second" onClick={()=> window.open("https://github.com/cynthiasantee", "_blank")}>
            <GitHubIcon style={iconStyle}></GitHubIcon>
            <LinkContainer>
            <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p style={pStyle}>GitHub</p></div>
            </LinkContainer>
          </HoverCard>
          <HoverCard className="third" onClick={()=> window.open("https://www.linkedin.com/in/cynthia-santee-351124108/", "_blank")}>
          <LinkedInIcon style={iconStyle}></LinkedInIcon>
            <LinkContainer>
            <div style={{display: "flex", alignItems:"center"}}><OpenInNewIcon /><p style={pStyle}>LinkedIn</p></div>
            </LinkContainer>
          </HoverCard>
        </CardContainer>
      </Container>

    )
};

export default Contact;

const Container = styled.div`
  ${FlexColumnStyle}
  min-height: calc(100vh - ${navBarHeight}px);

p {
  margin: 10px 0 0 0;
  padding: 0;

  @media ${breakpoint.mobile} {
    font-size: 18px;
  }
}
`


const HoverCard = styled(Card)`
    &:hover{
      cursor: pointer;
    }
`

const CardContainer = styled.div`

    & > * {
      flex: 1;
    }

    ${FlexStyle}
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 850px;
`
