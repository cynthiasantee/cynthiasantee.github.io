import React from 'react';
import styled from 'styled-components/macro';
import {aboutMe, contact, projects} from "../App"
import { navBarHeight } from "../util/navBarHeight";
import { fontColor } from '../theme';

//General scroll to element function
const scrollToAboutMe = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)
const scrollToProjects = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)  
const scrollToContact = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)  

const Nav = () => {

    const executeScrollAboutMe = () => scrollToAboutMe(aboutMe)
    const executeScrollProjects = () => scrollToProjects(projects)
    const executeScrollContact = () => scrollToContact(contact)

    return(
    <StyledNav>
        <button  onClick={executeScrollAboutMe} style={{float: "left"}}> About Me </button> 
        <button  onClick={executeScrollProjects} style={{float: "left"}}> Projects </button> 
        <button  style={{float: "right", height: "100%"}} onClick={executeScrollContact}> Contact Me </button> 
    </StyledNav>  
    )
}

const StyledNav = styled.nav`
    height: ${navBarHeight}px;
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    background-color: #0379cc;
    z-index: 10;

    button {
        background-color: inherit;
        color: ${fontColor('primary')};
    }
`;

export default Nav;