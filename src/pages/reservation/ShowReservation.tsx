import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '../../assets/calendar.svg';
import PeopleIcon from '../../assets/people.svg'
import WatchIcon from '../../assets/watch.svg';

type ShowReservationProps = {
    storeName : string | undefined;
    people : number | undefined;
    reservedDate : string | undefined;
    visitTime : string | undefined;
}

function ShowReservation(props: ShowReservationProps){
    return(
        <>
            <DrawerBoxTitle>예약이 완료되었습니다.</DrawerBoxTitle>
            {props.storeName}
            <BorderBox>
                <FlexBox><img alt="" src={CalendarIcon} />{props.reservedDate}</FlexBox>
                <FlexBox><img alt="" src={WatchIcon} />{props.visitTime}</FlexBox>
                <FlexBox><img alt="" src={PeopleIcon} />{props.people}</FlexBox>
            </BorderBox>
        </>
    )
}

export default ShowReservation;

const DrawerBoxTitle = styled.h3`
    font-size: 22px;
    font-weight: bolder;
    color: #FFB100;
    margin: 50px 0 20px 0;
`
const BorderBox = styled.div`
    width: 350px;
    height: 150px;
    border: 2px solid #D3D7DB;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`