import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import DevideLine from '../../components/common/DevideLine';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';

function StoreDetail() {
    return (
        <Section>
            <TopNaviBarBack pageName='' prevPath='' />
            <ImgBox />
            <Heading>
                <SubCategory>음식 유형</SubCategory>
                가게명
            </Heading>
            <Content>
                가게 소개
                #분위기 #태그
            </Content>

            <DevideLine />
            
            <Heading>상세정보</Heading>
            <Content>
                <table>
                    <tr>
                        <td>전화번호</td>
                        <td>000</td>
                    </tr>
                    <tr>
                        <td>운영시간</td>
                        <td>00 : 00 ~ 00 : 00</td>
                    </tr>
                    <tr>
                        <td>휴무일</td>
                        <td>매주 일요일</td>
                    </tr>
                    <tr>
                        <td>수용 인원</td>
                        <td>50명</td>
                    </tr>
                    <tr>
                        <td>룸 유무</td>
                        <td>있음</td>
                    </tr>
                    <tr>
                        <td>인당 금액</td>
                        <td>10,000</td>
                    </tr>
                    <tr>
                        <td>주차장</td>
                        <td>가능</td>
                    </tr>
                </table>
            </Content>

            <DevideLine />

            <Heading>매장 위치</Heading>
            <Content>
                매장 주소
            </Content>

            <BottomFixed>
                <DevideLine />
                <Button text="예약하기" onClick={()=>{}}/>
            </BottomFixed>
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

const ImgBox = styled.div`
    width: 100%;
    height: 200px;
    background-color: lightgrey;
`

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
    margin-bottom: 10px;
`

const SubCategory = styled.p`
    font-size: 14px;
    color: #D9D9D9;
    margin-bottom: 3px;
`

