import * as React from 'react';
import styled from 'styled-components';

type TagButtonProps = {
    value: string;
};

const TagButton: React.FC<TagButtonProps> = (props) => {
    return <TagButtonSC>{props.value}</TagButtonSC>;
};

export default TagButton;

const TagButtonSC = styled.button`
    border: none;
    background-color: #f1f1f1;
    font-size: 12px;
    padding: 10px;
    border-radius: 7px;
    margin: 0 15px 15px 0;
    cursor: pointer;

    &.select_on {
        background-color: #ffb100;
        color: #fff;
        font-weight: 600;
    }
`;
