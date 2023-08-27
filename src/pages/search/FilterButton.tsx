import React from 'react';
import styled from 'styled-components';

import { SearchModalType } from './modal/Enum';

type Props = {
    category: string;
    modalType: SearchModalType;
    onClick: (modalType: SearchModalType) => void;
};

const FilterButton: React.FC<Props> = (props) => {
    return (
        <Button
            onClick={() => {
                props.onClick(props.modalType);
            }}
        >
            {props.category}
        </Button>
    );
};

export default FilterButton;

const Button = styled.button`
    height: 30px;
    //margin: 10px 5px;
    padding: 4px 7px 20px 7px;
    color: gray;
    background-color: transparent;
    border: 1px solid #ececec;
    border-radius: 16px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;
