import React from 'react';
import styled from 'styled-components';

import { SearchModalType } from './modal/enum/Enum';

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
    padding: 7px 6px 20px 6px;
    color: gray;
    background-color: transparent;
    border: 1px solid #ececec;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;
