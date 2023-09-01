import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';
import DimmedLayer from '../../components/common/DimmedLayer';

import axiosRequest from '../../api/api';

import StoreMap from './StoreMap';
import Exit from './Exit'
import SetVisitDate from './SetVisitDate';
import SetTable from './SetTable';
import SetHeadcount from './SetHeadcount';
import ShowReservation from './ShowReservation';

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
    const initialReserveValue = {
        placeId: undefined,
        people: undefined,
        reservedDate: undefined,
        visitTime: undefined
    }
    const [reserveValue, setReserveValue] = useState(initialReserveValue);
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
                {storeDetail.description} <br />
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
            {storeDetail && storeDetail.address && (
            <StoreMap address={storeDetail.address.roadAddress} />)}
                {storeDetail.address?.roadAddress}{' '}
                {storeDetail.address?.detailAddress} 
            </Content>

            <DevideLine />

            <BottomFixed>
                <Button text="예약하기" onClick={()=>{setShowModal(current => !current)}} />
            </BottomFixed>
            
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
        margin: 15px 0 20px 26px;
    td{
        padding: 10px 30px 10px 0;
    }
`
const BottomFixed = styled.div`
    position: fixed;
    bottom: 0;
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