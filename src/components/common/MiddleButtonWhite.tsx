import * as React from 'react';
import styled from 'styled-components';

type MiddleButtonWhiteProps = {
    value : string;
}

const MiddleButtonWhite: React.FC<MiddleButtonWhiteProps> = (props) => {
    return <MiddleButtonWhiteSC>{props.value}</MiddleButtonWhiteSC>
}

export default MiddleButtonWhite;

const MiddleButtonWhiteSC = styled.button`
    width: 150px;
    height: 50px;
    border-radius : 5px;
    border: 1px solid #FFB100;
    background-color: #FFFFFF;
    color: #FFB100;
`;