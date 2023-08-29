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

    const [showModal, setShowModal] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [reserveValue, setReserveValue] = useState({
        placeId: 0,
        people: 0,
        reservedDate: "YYYY-MM-DD",
        visitTime: "HH:MM"
    });

    const updateVisitTime = (event: any) =>{
        const newState = {...reserveValue, visitTime : event.target.value};
        setReserveValue(newState);
    }

    useEffect(()=>{console.log(reserveValue);},[reserveValue]);

    return (
        <Section>
            <TopNaviBarBack pageName='' prevPath='' />
            <StoreImg>
                <Slider className='slider' autoplay speed={1000} infinite pauseOnHover>
                    <img alt="" src={BigImageSample} />
                    <img alt="" src={BigImageSample} />
                    <img alt="" src={BigImageSample} />
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
                        <td>.</td>
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
                {pageNum === 1 && 
                <SetVisitDate 
                openingHour={storeDetail.operatingHours?.openingHour}
                openingMinute={storeDetail.operatingHours?.openingMinute}
                closingHour={storeDetail.operatingHours?.closingHour}
                closingMinute={storeDetail.operatingHours?.closingMinute}
                updateVisitTime={updateVisitTime}
                />}
                {pageNum === 2 && <SetTable />}
                {pageNum === 3 && <SetHeadcount />}
                {pageNum === 4 && <ShowReservation />}
                <BoxPageButton>
                    {(pageNum !== 1 && pageNum !==4) && <Button text="이전" width="155px" backgroundColor='#E2E2E3' textColor='#FFFFFF' onClick={()=>{setPageNum(pageNum-1)}}/>}
                    {pageNum !== 4 && <Button text="다음" width="155px" onClick={()=>{setPageNum(pageNum+1)}}/>}
                    {pageNum === 4 && <Button text="완료" width="350px" onClick={()=>{setShowModal(current => !current); setPageNum(1);}}/>}
                </BoxPageButton>
            </DrawerBox>
            </>}
        </Section>
    );
}

type SetVisitDateProps = {
    openingHour : string;
    openingMinute : string;
    closingHour : string;
    closingMinute : string;
    updateVisitTime: (event:any) => void;
}

function SetVisitDate(props:SetVisitDateProps){
    const VisitTime = styled.span`
        width: 300px;

        select {
            border-color: #AFBCCF;
        }
    `

    return(
    <>   
        <Calendar />
        <VisitTime>
            <h4>방문 시간을 입력해 주세요</h4>
            <Select onChange={(event)=>props.updateVisitTime(event)}>
                <option>
                    { }
                </option>
                <option>
                    {props.openingHour} : {props.openingMinute}
                </option>
                <option>
                    {props.closingHour} : {props.closingMinute}
                </option>
            </Select>
        </VisitTime>
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
    const TableBox = styled.label`
       input{
        visibility: hidden;
       }

       :checked + img{
        border: 3px solid #FFB100;
        border-radius: 5px;
       }
    `

    return(
        <>
            <DrawerBoxTitle>테이블을 선택해주세요.</DrawerBoxTitle>
            <TableBoxGroup>
                <TableBox htmlFor='table1'>
                <input type="radio" name="table" id="table1"/>
                <img alt="" src={BigImageSample} style={{width: '150px', height: '100px'}} />
                10인석
                </TableBox>

                <TableBox htmlFor='table2'>
                <input type="radio" name="table" id="table2"/>
                <img alt="" src={BigImageSample} style={{width: '150px', height: '100px'}} />
                10인석
                </TableBox>

                <TableBox htmlFor='table3'>
                <input type="radio" name="table" id="table3"/>
                <img alt="" src={BigImageSample} style={{width: '150px', height: '100px'}} />
                10인석
                </TableBox>
                
                <TableBox htmlFor='table4'>
                <input type="radio" name="table" id="table4"/>
                <img alt="" src={BigImageSample} style={{width: '150px', height: '100px'}} />
                10인석
                </TableBox>
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
        font-size: 30px;
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
    // 인원 최대 최소 제한 추가
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