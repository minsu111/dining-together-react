import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DatetimeSelector: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <Div onClick={handleClick}>
            <FontAwesomeIcon icon={faCalendar} style={{ marginTop: '2px' }} />
            <Span>2023.8.15(화)</Span>
            <FontAwesomeIcon
                icon={faAngleDown}
                style={{
                    marginTop: '2px',
                    marginRight: '20px',
                    color: '#FFB100',
                }}
            />
        </Div>
    );
};

export default DatetimeSelector;

const Div = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 15px;
    //border: 1px solid black;
`;

const Span = styled.span`
    width: 100%;
    margin: 3px 0 0 12px;
    font-size: 15px;
    cursor: pointer;
`;
