import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../util/breakingPoints';

export const InfoCard: React.FC = (props) => {
    return (
        <InfoContainerStyle>
            {props.children}
        </InfoContainerStyle>
    )
}

export const InfoContainerStyle = styled.div`
    background-color: white;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;

    h3 {
        font-size: 25px;
    }
    p {
        font-size: 20px;
        padding: 0 10px;

        @media ${breakpoint.mobile} {
            font-size: 18px;
        }
    }
`