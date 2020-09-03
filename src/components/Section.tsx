import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Section = React.forwardRef<any, Props>((props, ref) => {
    return (
        <SectionContainer className={props.className} ref={ref}>
            <div className="content">
                {props.children}
            </div>
        </SectionContainer>
    )
});

const SectionContainer = styled.section`
    padding: 20px 0;
    width: 100%;

    .content {
        margin: 0 auto;
        width: 80%;
    }
`;