import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { SearchModalType } from './modal/enum/Enum';

type Props = {
    onClick: (modalType: SearchModalType) => void;
};

const TotalFilterButton: React.FC<Props> = (props) => {
    return (
        <Button
            onClick={() => {
                props.onClick(SearchModalType.Total);
            }}
        >
            <FontAwesomeIcon
                icon={faFilter}
                style={{ width: 24, height: 24, paddingTop: 5 }}
            />
        </Button>
    );
};

export default TotalFilterButton;

const Button = styled.button`
    width: 42px;
    height: 42px;
    margin: 8px 0 10px 8px;
    background-color: transparent;
    border: 1px solid #ececec;
    border-radius: 8px;
    cursor: pointer;
`;
