import React from 'react';
import styled from 'styled-components';
import GNBArea from '../../components/common/GNB';
import TopNaviBar from '../../components/common/TopNaviBar';
import StatusList from '../../components/ReservationList/StatusList';
import DetailInfo from '../../components/ReservationList/DetailInfo';


function ReservationList() {
    return (
        <section>
            <header>
                <TopNaviBar pageName="예약조회" />
            </header>
            <Inner>
                <StatusList />
            </Inner>
            <DetailInfo/>
            <footer>
                <GNBArea />
            </footer>
        </section>
    );
}

export default ReservationList;

const WholeWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    position: relative;
`;

const Wrap = styled.div`
    width: 390px;
    height: 844px;
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid #999;
    overflow-y: scroll;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    position: relative;
`;
