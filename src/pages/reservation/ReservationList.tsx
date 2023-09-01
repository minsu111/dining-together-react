import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TopNaviBar from '../../components/common/TopNaviBar';
import UserStatusList from '../../components/ReservationList/UserStatusList';
import OwnerStatusList from '../../components/ReservationList/OwnerStatusList';

function ReservationList() {
    const user = useSelector((state: RootState) => state.user);
    
    if (user.userType !== '1' && user.userType !== '2') {
        return (
            <section>
                <Header>
                    <TopNaviBar pageName="예약조회" />
                </Header>
                <Inner>
                    <h2 className='non-approve'>💁‍♀️ 로그인 후 이용해주세요</h2>
                </Inner>
            </section>
        );
    }

    if (user.userType === '2') {
        return (
            <section>
                <Header>
                    <TopNaviBar pageName="예약조회" />
                </Header>
                <Inner>
                    <OwnerStatusList />
                </Inner>
            </section>
        );
    }

    return (
        <section>
            <Header>
                <TopNaviBar pageName="예약조회" />
            </Header>
            <Inner>
                <UserStatusList /> 
            </Inner>
        </section>
    );
}

export default ReservationList;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
`;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    position: relative;

    .non-approve {
        width: 100%;
        margin-top: 100px;
        font-size: 20px;
        text-align: center;
        font-weight: 600;
    }
`;
