import { css } from "styled-components/macro";
import { navBarHeight } from "../util/navBarHeight"
import { pageWidth } from "../util/pageWidth"
import { breakpoint } from "../util/breakingPoints";

export const FlexStyle = css`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const FlexColumnStyle = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Font20Style = css`
    color: ${(props) => props.theme.fontColor};
    font-family: Courier New;
    font-size: 20px;
`

export const Font25Style = css`
    color: ${(props) => props.theme.fontColor};
    font-family: Courier New;
    font-size: 25px;
`

export const FontStyle = css`
    color: ${(props) => props.theme.fontColor};
    font-family: Courier New;
`

export const InfoContainerStyle = css`
    ${FontStyle}
    background-color: ${(props) => props.theme.whiteColor};
    border-radius: 4px;
    min-height: 350px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
    width: ${pageWidth};

    h3 {
        font-size: 25px;
    }
    p {
        font-size: 20px;
        padding: 0 10px;
    }
`

export const CardContainerStyle = css`
    ${FlexStyle}
    width: ${pageWidth};
    @media ${breakpoint.mobileTablet} {
        flex-direction: column;

    }
`

export const CardStyle = css`
    ${FlexColumnStyle}
    background-color: ${(props) => props.theme.whiteColor};
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
export const LinkContainerStyle = css`
    ${Font20Style}
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`