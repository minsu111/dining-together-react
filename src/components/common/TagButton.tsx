import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const TagButton: React.FC<{ name: string }> = ({ name }) => {
    const [isSelected, setSelected] = useState(false);
    const toggle = () => {
        console.log(name, isSelected);
        setSelected(!isSelected);
    };

    return (
        <TagButtonSC isSelected={isSelected} onClick={toggle}>
            {name}
        </TagButtonSC>
    );
};

export default TagButton;

type ButtonProps = {
    isSelected: boolean;
};

const TagButtonSC = styled.button<ButtonProps>`
    border: none;
    font-size: 12px;
    font-weight: 600;
    padding: 10px;
    border-radius: 7px;
    margin: 0 15px 15px 0;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? '#ffb100' : '#f1f1f1')};
    color: ${(props) => (props.isSelected ? '#fff' : '#000')};
    }
`;
