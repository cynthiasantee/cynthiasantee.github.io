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
`;