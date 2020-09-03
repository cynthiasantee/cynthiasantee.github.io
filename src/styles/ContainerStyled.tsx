import styled from "styled-components/macro";
import { navBarHeight } from "../util/navBarHeight";
import {breakpoint} from "../util/breakingPoints"

export const ContainerStyled = styled.div`
background-color:${(props) => props.theme.offWhite};
color: ${(props) => props.theme.fontColor};

nav {
    height: ${navBarHeight}px;
    width: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    background-color: ${(props) => props.theme.offWhite};
    z-index: 10;

  .underlined {
    border-bottom: 3px solid ${(props) => props.theme.fontColor};
  }
}

button {
    height: 97%;
    width: 180px;
    border: 0;
    font-size: 20px;
    background-color: ${(props) => props.theme.offWhite};
    font-family: Menlo;

    @media screen and ${breakpoint.mobile} {
      width: 100px;
      font-size: 14px;
    }
    @media screen and ${breakpoint.tablet} {
      width: 100px;
      font-size: 14px;
    }


    color: ${(props) => props.theme.fontColor};

    text-align: center;

    &:hover{
      cursor: pointer;
    }

    &:focus{
      outline: 0;
      box-sizing: border-box;
    }
  }
  `