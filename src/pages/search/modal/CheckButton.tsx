import React from 'react';
import styled from 'styled-components';
import { AtmosphereType } from './enum/Enum';

function CheckButton(props: {
    checkState: boolean;
    type: AtmosphereType;
    onClick: (atmoType: AtmosphereType) => void;
}) {
    return (
        <Button
            isSelected={props.checkState}
            onClick={() => {
                props.onClick(props.type);
            }}
        >
            {`#${props.type}`}
        </Button>
    );
}

export default CheckButton;

type ButtonProps = {
    isSelected: boolean;
};
const Button = styled.button<ButtonProps>`
    width: 110px;
    height: 40px;
    padding: 0;
    border-radius: 8px;
    border: 2px solid;
    border-color: ${(props) => (props.isSelected ? '#ffb100' : 'lightgray')};
    background-color: ${(props) =>
        props.isSelected ? 'rgba(255, 177, 0, 0.03)' : 'white'};
    color: ${(props) => (props.isSelected ? '#ffb100' : 'black')};
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`;
