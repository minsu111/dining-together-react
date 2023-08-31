import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

type CalendarProps = {
    dateSelected?: Date;
    showFooter?: boolean;
    setDateSelected?: (props?: Date) => void;
};

export default function Calendar(props: CalendarProps) {
    // eslint-disable-next-line no-nested-ternary
    const footer = props.showFooter ? (
        props.dateSelected ? (
            <p>{format(props.dateSelected, 'PP')}</p>
        ) : (
            <p>날짜를 선택해주세요.</p>
        )
    ) : null;

    const disabledDays = {
        before: new Date(), // 오늘 이전 날짜를 비활성화
    };

    return (
        <CalendarSC>
            <DayPicker
                mode="single"
                selected={props.dateSelected}
                onSelect={props.setDateSelected}
                footer={footer}
                modifiersClassNames={{
                    selected: 'my-selected',
                }}
                disabled={disabledDays}
            />
        </CalendarSC>
    );
}

const CalendarSC = styled.div`
    .my-selected:not([disabled]) {
        font-weight: bold;
        background-color: #ffb100;
        color: #ffffff;
    }
`;
