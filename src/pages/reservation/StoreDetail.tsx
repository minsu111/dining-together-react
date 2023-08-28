import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import DevideLine from '../../components/common/DevideLine';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import BigImageSample from '../../assets/ImageSampleB.svg'
import axiosRequest from '../../api/api';
import { store } from '../../app/store';

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

    return (
        <Section>
            <TopNaviBarBack pageName='' prevPath='' />
            <StoreImg />
            <Heading>
                <SubCategory>{storeDetail.foodCategory}</SubCategory>
                {storeDetail.storeName}
            </Heading>
            <Content>
                {storeDetail.description}
                <br />#분위기 #태그
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
                        <td>{storeDetail.operatingHours}</td>
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
                        <td>{}</td>
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
                <Button text="예약하기" onClick={()=>{window.location.href=('http://localhost:3000/store/reservation')}} />
            </BottomFixed>
        </Section>
    );
}

export default StoreDetail;

function StoreImg(){
    return(
        <Slider autoplay speed={1000} infinite pauseOnHover>
        <img alt="" src={BigImageSample} />
        <img alt="" src={BigImageSample} />
        <img alt="" src={BigImageSample} />
        </Slider>
    )
}

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
    position: fixed;
    bottom: 0;
    width: 100vw;
    max-width: 390px;
    text-align: center;
    padding: 10px 0;
    background-color: #FFFFFF;
`
const SubCategory = styled.p`
    font-size: 14px;
    color: #D9D9D9;
    margin-bottom: 3px;
`