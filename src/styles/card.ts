import styled from "styled-components/macro";
import { FlexColumnStyle } from './flex';

export const Card = styled.div`
    ${FlexColumnStyle}    
    background-color: white;
    border-radius: 4px;
    margin: 10px;
    min-height: 100px;
    min-width: 250px;
    padding: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;