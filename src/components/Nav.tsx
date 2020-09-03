import React from 'react';
import styled from 'styled-components';
import { Section } from '../App';
import {aboutMe, contact, projects} from "../App"
import { navBarHeight } from "../util/navBarHeight";
import { fontColor } from '../theme';

//General scroll to element function
const scrollToAboutMe = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)
const scrollToProjects = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)  
const scrollToContact = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight)  

const Nav = (props: {section: Section}) => {
    console.log(props.section);

    const executeScrollAboutMe = () => scrollToAboutMe(aboutMe)
    const executeScrollProjects = () => scrollToProjects(projects)
    const executeScrollContact = () => scrollToContact(contact)

    return(
    <StyledNav>
        <button className={props.section === 'about' ? 'underlined' : ''} onClick={executeScrollAboutMe} style={{float: "left"}}> About Me </button> 
        <button className={props.section === 'projects' ? 'underlined' : ''} onClick={executeScrollProjects} style={{float: "left"}}> Projects </button> 
        <button className={props.section === 'contact' ? 'underlined' : ''} style={{float: "right", height: "100%"}} onClick={executeScrollContact}> Contact Me </button> 
    </StyledNav>  
    )
}

const StyledNav = styled.nav`
    height: ${navBarHeight}px;
    width: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    background-color: ${(props) => props.theme.primaryColor};
    z-index: 10;

    .underlined {
        border-bottom: 3px solid ${(props) => props.theme.fontColor};
    }

    button {
        background-color: inherit;
        color: ${fontColor('primary')}
    }
`;

export default Nav;