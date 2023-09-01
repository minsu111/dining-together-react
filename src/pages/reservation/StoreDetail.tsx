import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
import { RootState } from '../../app/store';
import UserSlice from '../../app/UserSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function StoreDetail() {
    const storeId = window.location.href.split('/').pop()?.split('?')[0];
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

    const user = useSelector((state: RootState) => state.user);
    console.log(user.userType);
    const navigate = useNavigate();

    return (
        <>
            <TopNaviBarBack pageName='' prevPath='' />
            <StoreImgSlide>
                <Slider className='slider' autoplay speed={1000} infinite pauseOnHover>
                {Array.isArray(storeDetail.imageUrls) && storeDetail.imageUrls.map((e: string) => {
                    if (typeof e === 'string' && e.trim() !== '') {
                        return <StoreImg alt="" src={`http://13.209.102.55/${e}`} />;
                    }
                    return null;
                    })}
                </Slider>
            </StoreImgSlide>
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
                        <td>{storeDetail.storeContact && storeDetail.storeContact.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</td>
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
                        <td>{storeDetail.maxNum}명</td>
                    </tr>
                    <tr>
                        <td>룸 유무</td>
                        <td>{storeDetail.isRoom ? '있음': '없음'}</td>
                    </tr>
                    <tr>
                        <td>인당 금액</td>
                        <td>{storeDetail.cost && storeDetail.cost.toLocaleString('ko-KR')}</td>
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
                <br/>
                {storeDetail.address?.roadAddress}{' '}
                {storeDetail.address?.detailAddress} 
            </Content>

            <DevideLine />

            <BottomFixed>
                <Button 
                text="예약하기" 
                onClick={()=>{ 
                    if(user.userType === '1') {
                        setShowModal(current => !current)
                    } else{
                        navigate('/login')}
                }} 
                disabled={user.userType==='2'} />
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
        </>
    );
}

export default StoreDetail;

const Heading = styled.h3`
    margin: 22px 0 0 20px;
    font-size: 18px;
    font-weight: bolder;
`
const Content = styled.div`
    margin: 15px 26px 20px 26px;    
    font-size: 14px;
    line-height: 20px;
    td{
        padding: 10px 30px 10px 0;
    }
`
const BottomFixed = styled.div`
    z-index: 10;
    position: sticky;
    bottom: -20px;
    width: 100vw;
    max-width: 390px;
    padding: 10px 0;
    border-top: 1px solid #D9D9D9;
    text-align: center;
    background-color: #FFFFFF;
`
const SubCategory = styled.p`
    margin-bottom: 5px;     
    font-size: 14px;
    color: grey;
`
const StoreImgSlide = styled.div`
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
        right: 0;
        z-index: 10;
        width: 40px;
        height: 40px;
    }

    .slider .slick-next:before{
        font-size: 40px;
    }
`
const DrawerBox = styled.div `
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom:-20px;
    width: 390px;
    background-color:#FFFFFF;
    position: sticky;
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    min-height: 300px;
    justify-content: space-between
`
const BoxPageButton = styled.div`
    width: 390px;
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 15px 0;
`
const StoreImg = styled.img`
    width: 100%;
    height: 250px;   
    object-fit: cover;
`