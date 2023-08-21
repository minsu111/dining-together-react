import * as React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text : string;
    backgroundColor?: string; 
    textColor?: string; 
    width?: string;
}

type ButtonSCProps = {
    backgroundColor?: string; 
    textColor?: string; 
    width?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return <ButtonSC 
    backgroundColor={props.backgroundColor} 
    textColor={props.textColor} 
    width={props.width}>{props.text}</ButtonSC>
}

export default Button;

const ButtonSC = styled.button<ButtonSCProps>`
    width: ${(props) => props.width || '350px'};
    height: 50px;
    border-radius : 5px;
    border: 2px solid #FFB100;
    box-sizing: content-box;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.backgroundColor || '#FFB100'};
    color: ${(props) => props.textColor || '#FFFFFF'};
`;

