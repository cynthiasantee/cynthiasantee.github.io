import React from 'react';
import cover from "../images/cover.jpg";
import mobileCover from "../images/mobileCover.jpg";
import { navBarHeight } from "../util/navBarHeight";
import styled from 'styled-components/macro';
import {breakpoint} from "../util/breakingPoints"

const Image = () => {
    return(
    <Container>
        <Img src={cover} alt="background" className="cover"/>
        <Img src={mobileCover} alt="background" className="mobileCover"/>
    </Container>
    )
}

export default Image;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${navBarHeight}px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:${navBarHeight}px;
`
const Img = styled.img`
object-fit: cover;
height: 100%;
width: 100%;

&.cover{
  display:block;
 }

&.mobileCover{
 display:none;
}

@media ${breakpoint.mobileTablet} {
  &.cover{
  display:none;
 }

 &.mobileCover{
  display:block;
 }
}
`