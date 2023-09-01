import * as React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text : string;
    width?: string;
    disabled?: boolean;
    backgroundColor?: string; 
    textColor?: string; 
    onClick: ()=> void;
    type?: 'button' | 'submit' | 'reset';
    form?: string;
}

type ButtonSCProps = {
    width?: string;
    backgroundColor?: string; 
    textColor?: string; 
}

const Button: React.FC<ButtonProps> = (props) => {
    return <ButtonSC 
    width={props.width}
    disabled={props.disabled}
    backgroundColor={props.backgroundColor} 
    textColor={props.textColor} 
    onClick={()=>{props.onClick();}}
    type={props.type}
    form={props.form}
    >{props.text}
    </ButtonSC>
}

export default Button;

const ButtonSC = styled.button<ButtonSCProps>`
    width: ${(props) => props.width || '350px'};
    height: 50px;
    border-radius : 7px;
    border: none;
    box-sizing: content-box;
    font-size: 16px;
    font-weight: bold;
    background-color: ${(props) => props.backgroundColor || '#FFB100'};
    color: ${(props) => props.textColor || '#FFFFFF'};
    cursor: pointer;

    ${(props)=> props.disabled && `
        background-color: #d3d7db;
        color: #ececec;
        cursor: default;
    `}
`;

