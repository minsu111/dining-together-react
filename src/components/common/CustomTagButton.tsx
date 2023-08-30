import React, { useState } from 'react';
import styled from 'styled-components';

type TagButtonProps = {
    name: string;
    onClick: () => void;
    selectedCnt: number;
    isChecked: boolean;
};

const TagButton: React.FC<TagButtonProps> = ({
    name,
    onClick,
    selectedCnt,
    isChecked,
}) => {
    
    const [checkedButton, setCheckedButton] = useState(isChecked);

    const toggle = () => {
        if (checkedButton || (!checkedButton && selectedCnt < 3)) {
            setCheckedButton(!checkedButton);
            onClick();
        }
    };

    return (
        <TagButtonSC
            checkedButton={checkedButton}
            onClick={toggle}

        >
            {name}
        </TagButtonSC>
    );
};

export default TagButton;

type ButtonProps = {
    checkedButton: boolean;
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
        props.checkedButton ? '#ffb100' : '#f1f1f1'};
    color: ${(props) => (props.checkedButton ? '#fff' : '#000')};
    }
`;
