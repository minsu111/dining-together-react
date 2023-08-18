import React from 'react';
import MainButton from '../../components/common/MainButton';
import MiddleButtonWhite from '../../components/common/MiddleButtonWhite';
import MiddleButtonYellow from '../../components/common/MiddleButtonYellow';
import Calendar from '../../components/common/Calendar';

function RestaurantDetail() {
    return <section>
        <MainButton value="예약하기"/>
        <MiddleButtonWhite value='이전'/>
        <MiddleButtonYellow value= '다음' />
        <Calendar />
    </section>;
}

export default RestaurantDetail;
