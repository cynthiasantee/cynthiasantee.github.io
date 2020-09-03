import React from 'react';
import { Section } from '../App';
import {aboutMe, contact, projects} from "../App"
import { navBarHeight } from "../util/navBarHeight";

//General scroll to element function
const scrollToAboutMe = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight-1)
const scrollToProjects = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight-1)  
const scrollToContact = (ref: any) => window.scrollTo(0, ref.current.offsetTop-navBarHeight-1)  

const Nav = (props: {section: Section}) => {
    console.log(props.section);

    const executeScrollAboutMe = () => scrollToAboutMe(aboutMe)
    const executeScrollProjects = () => scrollToProjects(projects)
    const executeScrollContact = () => scrollToContact(contact)

    return(
    <nav>
        <button className={props.section === 'about' ? 'underlined' : ''} onClick={executeScrollAboutMe} style={{float: "left"}}> About Me </button> 
        <button className={props.section === 'projects' ? 'underlined' : ''} onClick={executeScrollProjects} style={{float: "left"}}> Projects </button> 
        <button className={props.section === 'contact' ? 'underlined' : ''} style={{float: "right", height: "100%"}} onClick={executeScrollContact}> Contact Me </button> 
    </nav>  
    )
}

export default Nav;