import { css } from "styled-components/macro";

export const FlexStyle = css`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const FlexColumnStyle = css`
    ${FlexStyle}
    flex-direction: column;
`;