import React, { useState } from 'react';
import styled from 'styled-components';

const CheckButton: React.FC<{ name: string }> = ({ name }) => {
    const [isSelected, setSelected] = useState(false);

    const toggle = () => {
        setSelected(!isSelected);
    };

    return (
        <Button isSelected={isSelected} onClick={toggle}>
            {name}
        </Button>
    );
};

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
    border-color: ${(props) => (props.isSelected ? 'lightgray' : '#ffb100')};
    background-color: ${(props) =>
        props.isSelected ? 'white' : 'rgba(255, 177, 0, 0.03)'};
    color: ${(props) => (props.isSelected ? 'black' : '#ffb100')};
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`;
