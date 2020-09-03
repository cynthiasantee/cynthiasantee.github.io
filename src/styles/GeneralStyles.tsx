import styled, { css } from "styled-components/macro";
import { pageWidth } from "../util/pageWidth"
import { breakpoint } from "../util/breakingPoints";

export const FlexStyle = css`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const FlexColumnStyle = css`
    ${FlexStyle}
    flex-direction: column;
`;

export const CardContainerStyle = css`
    ${FlexStyle}
    width: ${pageWidth};
    @media ${breakpoint.mobileTablet} {
        flex-direction: column;
    }
`

export const CardStyle = css`
    ${FlexColumnStyle}
    background-color: white;
    border-radius: 4px;
    flex: 1;
    min-height: 250px;
    p {
        margin: 0;
    }
    
    &.first {
    margin-right: 10px;

    @media ${breakpoint.mobileTablet} {
        margin-right: 0;
    }
    }

    &.second {
    margin-right: 10px;
    margin-left: 10px;

    @media ${breakpoint.mobileTablet} {
        margin-right: 0;
        margin-left: 0;
    }
    }

    &.third {
    margin-left: 10px;

    &:hover{
        cursor: pointer;
      }

    @media ${breakpoint.mobileTablet} {
        margin-left: 0;
    }
    }

    @media ${breakpoint.mobileTablet} {
        width: 100%;
        height: auto;
        min-height: 100px;
        margin: 5px 0;
    }

`
export const LinkContainer = styled.div`
    ${FlexStyle}
    text-align: center;
`