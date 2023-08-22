import React from 'react';
import { styled } from 'styled-components';

function DevideLine() {
    return <Line />;
}

export default DevideLine;

const Line = styled.hr`
    border: 0;
    width: 100%;
    height: 8px;
    background-color: #ececec;
`;
