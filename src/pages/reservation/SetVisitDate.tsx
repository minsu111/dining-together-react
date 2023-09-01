import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Select } from "@chakra-ui/select";
import Calendar from '../../components/common/Calendar';

type SetVisitDateProps = {
    openingHour : string;
    openingMinute : string;
    closingHour : string;
    closingMinute : string;
    visitTime: string | undefined;
    updateReserveValue: (keyToUpdate: string, value: any) => void;
}

function SetVisitDate(props:SetVisitDateProps){
    const [dateSelected, setDateSelected] = React.useState<Date>(new Date());
    useEffect(()=>{
        const year = dateSelected?.getFullYear().toString().slice(2);
        const month = (`0${(Number(dateSelected?.getMonth())+1).toString()}`).slice(-2);
        const date = (`0${dateSelected?.getDate().toString()}`).slice(-2);
        props.updateReserveValue('reservedDate', `${year}-${month}-${date}`);
    },[dateSelected]);
    
    const openingHour = Number(props.openingHour);
    const closingHour = Number(props.closingHour)< 12? Number(props.closingHour) +12 : Number(props.closingHour);
    const openingMinute = Number(props.openingMinute);
    const closingMinute = Number(props.closingMinute);
    const HourArray = [];
    const TimeArray:string[] = [];

    for(let i = 0; i< Math.abs(closingHour - openingHour); i+=1){
        HourArray.push(openingHour+i);
    }
    HourArray.forEach((e) => {
        TimeArray.push(`${e}:00`);
        TimeArray.push(`${e}:30`);
    })
    if(openingMinute === 30){
        TimeArray.unshift();
    }
    if(closingMinute === 0){
        TimeArray.pop();
    }
    console.log(closingMinute);
    console.log(TimeArray);

    return(
    <>   
        <Calendar dateSelected={dateSelected} setDateSelected={(value)=>{setDateSelected(value as Date)}}/>
        <VisitTime>
            <h4>방문 시간을 입력해 주세요</h4>
            <Select placeholder={' '} value={props.visitTime} onChange={(event)=>props.updateReserveValue('visitTime', event.target.value)}>
                {TimeArray.map(e=>{
                    return(
                        <option>
                            {e}
                        </option>
                    )
                })}
            </Select>
        </VisitTime>
    </>
    )
}

export default SetVisitDate;

const VisitTime = styled.span`
width: 300px;
select {
    border-color: #AFBCCF;
}
`