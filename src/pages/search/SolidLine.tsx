import React from "react";
import styled from 'styled-components';

function SolidLine() {

    return <SolidLineSC/>;
}

export default SolidLine;


const SolidLineSC = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ececec;
`;
