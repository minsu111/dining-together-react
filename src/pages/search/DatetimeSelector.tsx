import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function DatetimeSelector() {
    return (
        <Div>
            <FontAwesomeIcon icon={faCalendar} style={{marginTop: '2px'}}/>
            <Span>8.15(화) / 20명</Span>
            <FontAwesomeIcon icon={faAngleDown} style={{marginTop: '2px', marginRight: '10px', color: "#FFB100"}}/>
        </Div>
    );
};

export default DatetimeSelector;

const Div = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    padding-left: 15px;
    border: 1px solid black;
`;

const Span = styled.span`
    width: 100%;
    margin: 0 7px;
    font-size: 15px;
`;