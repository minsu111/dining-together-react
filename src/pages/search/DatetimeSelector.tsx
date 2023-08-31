import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { parseDateString } from '../../utils/utils';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale'; // 한국어 로케일 가져오기

function DatetimeSelector(props: { onClick: () => void }) {
    const expectedDate = useSelector((state: RootState) => {
        return state.filter.expectedDate;
    });

    const [formattedDate, setFormattedDate] = useState('');
    useEffect(() => {
        let initialDate;
        try {
            if (!expectedDate) {
                initialDate = new Date();
            } else initialDate = parseDateString(expectedDate);
        } catch (error) {
            initialDate = new Date();
            console.error('Error occurred:', error);
        }

        setFormattedDate(format(initialDate, 'yyyy.M.d(EEE)', { locale: ko })); // 2023.8.15(화)
    }, [expectedDate]);

    const handleClick = () => {
        props.onClick();
    };

    return (
        <Div onClick={handleClick}>
            <FontAwesomeIcon icon={faCalendar} style={{ marginTop: '2px' }} />
            <Span>{formattedDate}</Span>
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
}

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
