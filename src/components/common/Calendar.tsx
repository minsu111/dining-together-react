import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

type CalendarProps = {
  dateSelected?: Date;
  setDateSelected?: (props?: Date) => void;
}

export default function Calendar(props:CalendarProps) {
  const footer=  props.dateSelected ? <p>{format(props.dateSelected, 'PP')}</p> : <p>날짜를 선택해주세요.</p>;

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
    />
    </CalendarSC>
  );
}

const CalendarSC = styled.div `
.my-selected:not([disabled]) { 
  font-weight: bold; 
  background-color: #FFB100;
  color: #FFFFFF;
}
`