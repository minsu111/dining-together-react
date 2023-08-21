import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import DevideLine from '../../components/common/DevideLine';

function StoreDetail() {
    return (
        <Section>
            음식 유형
            <Heading>가게명</Heading>
            <Content>
            가게 소개 <br />
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

            <DevideLine />
            <BottomFixed>
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

const Heading = styled.h3`
    margin: 22px 0 0 20px;
`
const Content = styled.div`
    font-size: 15px;
        margin: 10px 0 10px 26px;
    td{
        padding: 5px 12px 5px 0;
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