import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

export default function Calendar() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>날짜를 입력해주세요.</p>;
  if (selected) {
    footer = <p>{format(selected, 'PP')}.</p>;
  }
  return (
    <CalendarSC>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
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