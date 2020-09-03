import React from 'react';
import styled from 'styled-components/macro';
import { Font25Style, CardContainerStyle, CardStyle, FlexColumnStyle, LinkContainerStyle } from "../styles/GeneralStyles"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { navBarHeight } from "../util/navBarHeight";
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { theme } from '..';
import { breakpoint } from '../util/breakingPoints';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
      <Container ref={ref}>
        <p>
          santeecynthia@gmail.com
        </p>
        <p style={{marginBottom: "30px"}}>
          Walnut Creek, CA
        </p>
        
        <CardContainer>
        <Card className="first" onClick={()=> window.open("https://drive.google.com/file/d/1kvwiNjww6I0SRUgnR-q2XN952nui3G8B/view?usp=sharing", "_blank")}>
          <DescriptionIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></DescriptionIcon>
          <LinkContainer>
            <OpenInNewIcon></OpenInNewIcon> Resume
          </LinkContainer>
        </Card>
          <Card className="second" onClick={()=> window.open("https://github.com/cynthiasantee", "_blank")}>
            <GitHubIcon style={{fontSize:"90px", color: `${theme.fontColor}`, marginBottom: "10px" }}></GitHubIcon>
            <LinkContainer>
              <OpenInNewIcon></OpenInNewIcon> GitHub
            </LinkContainer>
          </Card>
          <Card className="third" onClick={()=> window.open("https://www.linkedin.com/in/cynthia-santee-351124108/", "_blank")}>
          <LinkedInIcon style={{fontSize:"100px", color: `${theme.fontColor}` }}></LinkedInIcon>
            <LinkContainer>
              <OpenInNewIcon></OpenInNewIcon> LinkedIn
            </LinkContainer>
          </Card>
        </CardContainer>
      </Container>

    )
});

export default Contact;

const Container = styled.div`
  ${FlexColumnStyle}
  min-height: calc(100vh - ${navBarHeight}px);
  // border: 1px solid black;

p {
  ${Font25Style}
  margin: 10px 0 0 0;
  padding: 0;

  @media ${breakpoint.mobile} {
    font-size: 18px;
  }
}
`


const Card = styled.div`
    ${CardStyle}
    &:hover{
      cursor: pointer;
    }
`

const CardContainer = styled.div`
    ${CardContainerStyle}
`

const LinkContainer = styled.div`
    ${LinkContainerStyle}
`
