import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function TotalFilterButton() {
    const handleSpanClick = () => {
        alert('TotalFilterButton 클릭');
    };

    return (
        <Button onClick={handleSpanClick}>
            <FontAwesomeIcon
                icon={faFilter}
                style={{ width: 24, height: 24, paddingTop: 5 }}
            />
        </Button>
    );
}

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
