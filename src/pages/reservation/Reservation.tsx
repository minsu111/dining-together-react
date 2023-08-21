import React from 'react';
import Calendar from '../../components/common/Calendar';
import StoreDetail from './StoreDetail';
import styled from 'styled-components';
import Button from '../../components/common/Button';

function Reservation() {
    return <section>
        <StoreDetail />
        <ModalBottom>
            <Calendar />
            <Button text="이전" width="150px" backgroundColor='#FFFFFF' textColor='#FFB100'/>
            <Button text="다음" width="150px"/>
        </ModalBottom>
    </section>;
}

export default Reservation;

const ModalBottom = styled.div `
    width: 390px;
    background-color:grey;
    position: fixed;
    bottom:0px;
    border-radius: 10px;
    z-index: 100;
`