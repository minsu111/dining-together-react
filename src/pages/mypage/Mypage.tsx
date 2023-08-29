import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TopNaviBar from '../../components/common/TopNaviBar';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';
import { RootState } from '../../app/store';
import AddStoreBtn from '../../components/common/AddStoreBtn';

function Mypage() {
    const navigate = useNavigate();
    const goToMy = (path: string) => {
        navigate(`/my/${path}`);
    };
    const goLogin = () => {
        navigate(`/login`);
    };
    const user = useSelector((state: RootState) => state.user);
    const token = localStorage.getItem('jwt_token');

    useEffect(() => {
        if (!token) {
            goLogin();
        }
    }, []);

    return (
        <div>
            <Container>
                <TopNaviBar pageName="마이페이지" />
                {user.userType === '1' && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요 <span>{user.userName}</span> 님
                            </Title>
                        </TitleWrapper>
                        <Account>{user.userEmail}</Account>
                    </TitleSection>
                )}
                {user.userType === '2' && user.userType !== null && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요 <span>{user.userName}</span> 님
                            </Title>
                            <OwnerBadge>사장님</OwnerBadge>
                        </TitleWrapper>
                        <Account>{user.userEmail}</Account>
                        <hr />
                        <AddStoreBtn />
                    </TitleSection>
                )}
            </Container>
            <DevideLine />
            <Container>
                <InfoMenu onClick={() => goToMy('info')}>
                    <span>내 정보</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                <InfoMenu onClick={() => goToMy('list')}>
                    <span>내 예약 내역</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
            </Container>
        </div>
    );
}

export default Mypage;

const Container = styled.section`
    margin: 0 20px;
`;

const TitleSection = styled.section`
    margin: 30px 0;
    cursor: default;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    line-height: 45px;
    padding: 10px 0;
    margin-right: 12px;

    & > span {
        font-weight: 700;
    }
`;

const OwnerBadge = styled.div`
    all: unset;
    width: 40px;
    height: 20px;
    background-color: #ffb100;
    border-radius: 7px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    padding: 6px 8px;
    cursor: default;
`;

const Account = styled.h3`
    margin-bottom: 50px;
`;

const InfoMenu = styled.button`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-size: 18px;
    }
`;
