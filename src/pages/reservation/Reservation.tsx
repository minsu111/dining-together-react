import React, {useState} from 'react';
import styled from 'styled-components';
import { Select } from "@chakra-ui/select";
import Calendar from '../../components/common/Calendar';
import StoreDetail from './StoreDetail';
import Button from '../../components/common/Button';
import DimmedLayer from '../../components/common/DimmedLayer';
import Store from '../../assets/store.svg';
import CalendarIcon from '../../assets/calendar.svg';
import PeopleIcon from '../../assets/people.svg'
import WatchIcon from '../../assets/watch.svg';

function Reservation() {
    const [pageNum, setPageNum] = useState(1);

    return(
    <Section>
        <StoreDetail />
        <DimmedLayer />
        <DrawerBox>

            {pageNum === 1 ? <SetTime /> : null}
            {pageNum === 2 ? <SetHeadcount /> : null}
            {pageNum === 3 ? <SetTable /> : null}
            {pageNum === 4 ? <ShowReservation /> : null}

            <BottomButton>
                {(pageNum !== 1 && pageNum !==4) ? <Button text="이전" width="155px" backgroundColor='#E2E2E3' textColor='#FFFFFF' onClick={()=>{setPageNum(pageNum-1)}}/> : null}
                {pageNum !== 4 ? <Button text="다음" width="155px" onClick={()=>{setPageNum(pageNum+1)}}/> : null}
                {pageNum === 4 ? <Button text="완료" width="350px" onClick={()=>{}}/> : null}
            </BottomButton>
        </DrawerBox>
    </Section>
    );
}

function SetTime(){
    return(
    <>   
        <Calendar />
        <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    </>
    )
}

function SetTable(){
    const TableBoxGroup = styled.div`
        width: 350px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    `

    return(
        <>
            <DrawerBoxTitle>테이블을 선택해주세요.</DrawerBoxTitle>
            <TableBoxGroup>
                
                <label htmlFor='table1'>
                <input type="radio" name="table" id="table1"/>
                <img alt="" src={Store} style={{width: '150px', height: '100px'}} />
                10인석
                </label>
            </ TableBoxGroup>
        </>
    )
}

function SetHeadcount(){
    const [headcount, setHeadcount] = useState(8);
    const CountButton = styled.button`
        width: 30px;
        height: 30px;
        border: solid #21272A;
        border-width: 3px; 
        border-radius: 100%;
        background: none;
        font-size: 200%;
        font-weight: bold;
        color: #21272A;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const CountNum = styled.span`
        font-size: 50px;
        font-weight: bold;
        color: #21272A;
    `
    return(
        <>
            <DrawerBoxTitle>인원 수를 선택해주세요.</DrawerBoxTitle>
            <BorderBox>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount-1)}}>−</CountButton>
                <CountNum>{headcount}</CountNum>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount+1)}}>+</CountButton>
            </BorderBox>
        </>
    )
}

function ShowReservation(){
    return(
        <>
            <DrawerBoxTitle>예약이 완료되었습니다.</DrawerBoxTitle>
            <BorderBox>
                <FlexBox><img alt="" src={CalendarIcon} />날짜</FlexBox>
                <FlexBox><img alt="" src={WatchIcon} />시간</FlexBox>
                <FlexBox><img alt="" src={PeopleIcon} />인원</FlexBox>
            </BorderBox>
        </>
    )
}

export default Reservation;

const Section = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    max-width: 390px;

    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;

    display: flex;
    flex-direction: column;
    border: 1px solid #e8e8e8;
`;

const DrawerBox = styled.div `
    width: 390px;
    background-color:#FFFFFF;
    position: fixed;
    bottom:0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    justify-content: space-between
`

const BottomButton = styled.div`
    width: 390px;
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 15px 0;
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

const DrawerBoxTitle = styled.h3`
    font-size: 22px;
    font-weight: bolder;
    color: #FFB100;
    margin: 50px 0 20px 0;
`
const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`