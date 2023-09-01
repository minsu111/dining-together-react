import React from 'react';
import { styled } from 'styled-components';

function DimmedLayer() {
    return <Layer />;
}

export default DimmedLayer;

const Layer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    opacity: 44%;
`;
