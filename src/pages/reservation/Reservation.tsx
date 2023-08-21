import React from 'react';
import styled from 'styled-components';
import Calendar from '../../components/common/Calendar';
import StoreDetail from './StoreDetail';
import Button from '../../components/common/Button';
import DimmedLayer from '../../components/common/DimmedLayer';

function Reservation() {
    return <Section>
        <StoreDetail />
        <DimmedLayer />
        <ModalBottom>
            <Calendar />
            <BottomButton>
                <Button text="이전" width="155px" backgroundColor='#E2E2E3' textColor='#FFFFFF' onClick={()=>{}}/>
                <Button text="다음" width="155px" onClick={()=>{}}/>
            </BottomButton>
        </ModalBottom>
    </Section>;
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

const ModalBottom = styled.div `
    width: 390px;
    background-color:#FFFFFF;
    position: fixed;
    bottom:0px;
    border-radius: 7px;
    z-index: 100;
`
const BottomButton = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`