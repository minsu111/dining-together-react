import React from 'react';
import styled from 'styled-components';

type TagButtonProps = {
    name: string;
    onClick: () => void;
    checked: boolean;
};

const TagBtn: React.FC<TagButtonProps> = ({
    name,
    onClick,
    checked,
}) => {
    return (
        <TagButtonSC checked={checked} onClick={onClick}>
            {name}
        </TagButtonSC>
    );
};

export default TagBtn;

type ButtonProps = {
    checked: boolean;
};

const TagButtonSC = styled.button<ButtonProps>`
    border: none;
    font-size: 12px;
    font-weight: 600;
    padding: 10px;
    border-radius: 7px;
    margin: 0 15px 15px 0;
    cursor: pointer;
    background-color: ${(props) =>
        props.checked ? '#ffb100' : '#f1f1f1'};
    color: ${(props) => (props.checked ? '#fff' : '#000')};
    }
`;
