import styled from "styled-components/macro";
import {breakpoint} from "../util/breakingPoints"

export const ContainerStyled = styled.div`
background-color:${(props) => props.theme.offWhite};
color: ${(props) => props.theme.fontColor};

button {
    height: 97%;
    width: 180px;
    border: 0;
    font-size: 20px;
    background-color: ${(props) => props.theme.tertiaryColor};
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