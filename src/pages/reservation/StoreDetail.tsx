import React, {useState, useEffect, createContext} from 'react';
import styled from 'styled-components';
import { Select } from "@chakra-ui/select";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import BigImageSample from '../../assets/ImageSampleB.svg';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';
import DimmedLayer from '../../components/common/DimmedLayer';
import Calendar from '../../components/common/Calendar';
import CalendarIcon from '../../assets/calendar.svg';
import PeopleIcon from '../../assets/people.svg'
import WatchIcon from '../../assets/watch.svg';
import axiosRequest from '../../api/api';
import store from '../../app/store';
import { stringify } from 'querystring';
import { format } from 'path';

function StoreDetail() {
    const storeId = window.location.href.split('/').pop();
    const [storeDetail, setStoreDetail] = useState<Record<string, any>>({});
    useEffect(()=>{
        const GetStoreDetail = async () => {
            try {
                setStoreDetail(await axiosRequest('GET', `/stores/${storeId}`));
            } catch (error) {
                // 여기에 에러 처리
                console.log('에러');
            }
        }
    GetStoreDetail();
    }, [storeId]);   
    console.log(storeDetail);

    const [showModal, setShowModal] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const initialReserveValue = {
        placeId: undefined,
        people: undefined,
        reservedDate: undefined,
        visitTime: undefined
    }
    const [reserveValue, setReserveValue] = useState(initialReserveValue);

    useEffect(()=>{console.log(reserveValue)},[reserveValue])

    const updateReserveValue = (keyToUpdate: string, value: any) => {
        const newState = { ...reserveValue, [keyToUpdate] : value};
        setReserveValue(newState);
    }

    const [maxPeople, setMaxPeople] = useState(0);
    const [minPeople, setMinPeople] = useState(0);
    const updateMaxPeople = (maxNum:number) =>{
        setMaxPeople(maxNum);
    }
    const updateMinPeople = (minNum:number) =>{
        setMinPeople(minNum);
    }

    const [result, setResult] = useState({
        storeName: undefined, 
        people: undefined,
        reservedDate: undefined, 
        visitTime: undefined
    });

    const complete = async() =>{
        try {
            setResult(await axiosRequest('POST', `/reserve/`,
                reserveValue
            ));
        } catch (error) {
            // 여기에 에러 처리
            console.log('에러');
        }
        
    }

    return (
        <Section>
            <TopNaviBarBack pageName='' prevPath='' />
            <StoreImg>
                <Slider className='slider' autoplay speed={1000} infinite pauseOnHover>
                    <img alt="" src={storeDetail.imageUrl}/>
                </Slider>
            </StoreImg>
            <Heading>
                <SubCategory>{storeDetail.foodCategory}</SubCategory>
                {storeDetail.storeName}
            </Heading>
            <Content>
                {storeDetail.description}
                {storeDetail.mood}
            </Content>

            <DevideLine />
            <Heading>상세정보</Heading>
            <Content>
                <table>
                    <tr>
                        <td>전화번호</td>
                        <td>{storeDetail.storeContact}</td>
                    </tr>
                    <tr>
                        <td>운영시간</td>
                        <td>{storeDetail.operatingHours?.openingHour}:{storeDetail.operatingHours?.openingMinute}
                         ~ 
                         {storeDetail.operatingHours?.closingHour}:{storeDetail.operatingHours?.closingMinute}</td>
                    </tr>
                    <tr>
                        <td>휴무일</td>
                        <td>{storeDetail.closedDays}</td>
                    </tr>
                    <tr>
                        <td>수용 인원</td>
                        <td>{storeDetail.maxNum}</td>
                    </tr>
                    <tr>
                        <td>룸 유무</td>
                        <td>{storeDetail.isRoom ? '있음': '없음'}</td>
                    </tr>
                    <tr>
                        <td>인당 금액</td>
                        <td>{storeDetail.cost}</td>
                    </tr>
                    <tr>
                        <td>주차장</td>
                        <td>{storeDetail.isParking? '있음' : '없음'}</td>
                    </tr>
                </table>
            </Content>

            <DevideLine />

            <Heading>매장 위치</Heading>
            <Content>
                {storeDetail.location}
                {storeDetail.address?.roadAddress}{' '}
                {storeDetail.address?.detailAddress} 
            </Content>

            <DevideLine />

            <BottomFixed>
                <Button text="예약하기" onClick={()=>{setShowModal(current => !current)}} />
            </BottomFixed>
            
            {/* 예약 모달 */}
            {showModal && 
            <>
            <DimmedLayer /> 
            <DrawerBox>
                <Exit onClick={()=>{setShowModal(current => !current); setPageNum(1); setReserveValue(initialReserveValue)}}/>
                {pageNum === 1 && 
                <SetVisitDate 
                openingHour={storeDetail.operatingHours?.openingHour}
                openingMinute={storeDetail.operatingHours?.openingMinute}
                closingHour={storeDetail.operatingHours?.closingHour}
                closingMinute={storeDetail.operatingHours?.closingMinute}
visitTime={reserveValue.visitTime}
                updateReserveValue={updateReserveValue}
                />}

                {pageNum === 2 && 
                <SetTable 
                storeId= {storeId}
                reserveValue = {reserveValue}
                updateReserveValue={updateReserveValue}
                updateMaxPeople = {updateMaxPeople}
                updateMinPeople = {updateMinPeople}
                />}

                {pageNum === 3 && 
                <SetHeadcount 
                updateReserveValue={updateReserveValue}
                maxPeople={maxPeople}
                minPeople={minPeople}
                />}

                {pageNum === 4 && 
                <ShowReservation 
                storeName = {result.storeName}
                people = {result.people}
                reservedDate = {result.reservedDate}
                visitTime = {result.visitTime}
                />}

                <BoxPageButton>
                    {(pageNum !== 1 && pageNum !==4) && <Button text="이전" width="155px" backgroundColor='#E2E2E3' textColor='#FFFFFF' onClick={()=>{setPageNum(pageNum-1)}}/>}
                    {pageNum === 1 && <Button text="다음" width="155px" onClick={()=>{setPageNum(pageNum+1)}} disabled={reserveValue.reservedDate==='undefined-aN-ed' || !(reserveValue.visitTime)}/>}
                    {pageNum === 2 && <Button text="다음" width="155px" onClick={()=>{setPageNum(pageNum+1)}} disabled={!(reserveValue.placeId)}/>}
                    {pageNum === 3 && <Button text="다음" width="155px" onClick={()=>{setPageNum(pageNum+1); complete(); }}/>}
                    {pageNum === 4 && <Button text="완료" width="350px" onClick={()=>{setShowModal(current => !current); setPageNum(1); setReserveValue(initialReserveValue)} }/>}
                </BoxPageButton>
            </DrawerBox>
            </>}
        </Section>
    );
}
function Exit(props:{onClick:()=> void}){
    const ExitButton = styled.div`
        position: absolute;
        top: -60px;
        font-size: 50px;
        color: #FFFFFF;
        cursor: pointer;
    `
    return(
        <ExitButton onClick={props.onClick}>
            ×
        </ExitButton>
    )
}

type SetVisitDateProps = {
    openingHour : string;
    openingMinute : string;
    closingHour : string;
    closingMinute : string;
    visitTime: string | undefined;
    updateReserveValue: (keyToUpdate: string, value: any) => void;
}

function SetVisitDate(props:SetVisitDateProps){
    const VisitTime = styled.span`
        width: 300px;
        select {
            border-color: #AFBCCF;
        }
    `
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

type SetTableProps = {
    storeId: string | undefined;
    reserveValue : Record<string, any>;
    updateReserveValue: (keyToUpdate: string, value: any) => void;
    updateMaxPeople: (props:number) => void;
    updateMinPeople: (props:number) => void;
}

function SetTable(props: SetTableProps){
    const TableBoxGroup = styled.div`
        width: 350px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    `
    const TableBox = styled.label`
        input {
            visibility: hidden;
        }

       : checked + img{
        border: 3px solid #FFB100;
        border-radius: 5px;
       }
       
    `
    interface Place {
        placeId: number;
        placeName: string;
        placeType: string;
        placeImage: string;
        maxPeople: number;
        minPeople: number;
      }

    const [placeList, setPlaceList] = useState<Place[]>([]);
    useEffect(()=>{
        const PlaceList = async () => {
            try {
                setPlaceList(await axiosRequest('GET', `/reserve/placelist?storeId=${props.storeId}&date=${props.reserveValue.reservedDate}`,{}));
            } catch (error) {
                // 여기에 에러 처리
                console.log('에러');
            }
        }
        PlaceList();
    },[props.reserveValue.visitTime])

    const [selectedTable, setSelectedTable] = useState('');
    return(
        <>
            <DrawerBoxTitle>테이블을 선택해주세요.</DrawerBoxTitle>
            <TableBoxGroup>
                {placeList ? (
                placeList.map((table, index)=>(
                    <TableBox htmlFor={`table${index}`} >
                        <input 
                        type="radio" 
                        id={`table${index}`} 
                        name="table" 
                        value={table.placeId}
                        checked={selectedTable === table.placeId.toString()}
                        onChange={(event) => 
                        {
                        setSelectedTable(event.target.value);
                        props.updateReserveValue('placeId', Number(event.target.value));
                        props.updateMaxPeople(table.maxPeople);
                        props.updateMinPeople(table.minPeople);
                        }}
                        />
                        <img alt="" src={table.placeImage} style={{width: '150px', height: '100px'}} />
                        [{table.placeType}] {table.placeName}
                        <br/>{table.minPeople} ~{table.maxPeople} 명
                    </TableBox>)
                )): <Heading>예약 가능한 테이블이 없습니다.</Heading> }
            </ TableBoxGroup>
        </>
    )
}

type SetHeadcountProps = {
    updateReserveValue: (keyToUpdate: string, value: any) => void; 
    maxPeople: number;
    minPeople: number;
}


function SetHeadcount(props: SetHeadcountProps){
    const [headcount, setHeadcount] = useState(props.minPeople);
    const CountButton = styled.button`
        width: 30px;
        height: 30px;
        border: solid;
        border-color: ${p => p.disabled ? '#e8e8e8': '#21272A'};
        border-width: 3px; 
        border-radius: 100%;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: ${p => p.disabled ? '#e8e8e8': '#21272A'}
    `
    const CountNum = styled.span`
        font-size: 50px;
        font-weight: bold;
        color: #21272A;
    `

    useEffect(()=>{
        props.updateReserveValue('people', headcount);
    },[headcount]) 

    // 인원 최대 최소 제한 추가
    return(
        <>
            <DrawerBoxTitle>인원 수를 선택해주세요.</DrawerBoxTitle>
            <BorderBox>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount-1)}} disabled={headcount<=props.minPeople}>−</CountButton>
                <CountNum>{headcount}</CountNum>
                <CountButton type="button" onClick={()=>{setHeadcount(headcount+1)}} disabled={headcount>=props.maxPeople}>+</CountButton>
            </BorderBox>
        </>
    )
}

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

export default StoreDetail;


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
const Heading = styled.h3`
    font-size: 18px;
    font-weight: bolder;
    margin: 22px 0 0 20px;
`
const Content = styled.div`
    font-size: 14px;
        margin: 10px 0 10px 26px;
    td{
        padding: 10px 30px 10px 0;
    }
`
const BottomFixed = styled.div`
    // position: fixed;
    // bottom: 0;
    width: 100vw;
    max-width: 390px;
    text-align: center;
    padding: 10px 0;
    background-color: #FFFFFF;
    margin-bottom: 60px;
`
const SubCategory = styled.p`
    font-size: 14px;
    color: #D9D9D9;
    margin-bottom: 3px;
`
const StoreImg = styled.div`
    .slider .slick-prev{
        left: 0;
        z-index: 10;
        width: 40px;
        height: 40px;
    }

    .slider .slick-prev:before{
        font-size: 40px;
    }

    .slider .slick-next{
        right: 0px;
        z-index: 10;
        width: 40px;
        height: 40px;
    }

    .slider .slick-next:before{
        font-size: 40px;
    }
`
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
const BoxPageButton = styled.div`
    width: 390px;
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 15px 0;
    margin-bottom: 100px;
`
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