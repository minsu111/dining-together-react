import React from 'react';
import styled from 'styled-components';

const TopNaviBar: React.FC<{ pageName: string }> = ({ pageName }) => {
    return (
        <Container>
            <Title>{pageName}</Title>
        </Container>
    );
};

export default TopNaviBar;

const Container = styled.div`
    width: 390px;
    height: 48px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;
