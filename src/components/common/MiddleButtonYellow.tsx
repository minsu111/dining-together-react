import * as React from 'react';
import styled from 'styled-components';

type MiddleButtonYellowProps = {
    value : string;
}

const MiddleButtonYellow: React.FC<MiddleButtonYellowProps> = (props) => {
    return <MiddleButtonYellowSC>{props.value}</MiddleButtonYellowSC>
}

export default MiddleButtonYellow;

const MiddleButtonYellowSC = styled.button`
    width: 150px;
    height: 50px;
    border-radius : 5px;
    border: none;
    background-color: #FFB100;
    color: white;
`;