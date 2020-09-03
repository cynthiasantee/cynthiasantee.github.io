import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../util/breakingPoints';
import { Card } from '../styles';

export const InfoCard = styled(Card)`
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