import * as React from 'react';
import styled from 'styled-components';

type MainButtonProps = {
    value : string;
}

const MainButton: React.FC<MainButtonProps> = (props) => {
    return <MainButtonSC>{props.value}</MainButtonSC>
}

export default MainButton;

const MainButtonSC = styled.button`
    width: 300px;
    height: 50px;
    border-radius : 5px;
    border: none;
    background-color: #FFB100;
    color: white;
`;