import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import DevideLine from '../../components/common/DevideLine';
import axiosRequest from '../../api/api';
import { RootState } from '../../app/store';
import { logout } from '../../app/UserSlice';

function MyInfo() {
    const navigate = useNavigate();
    const goToEditPage = (path: string) => {
        navigate(`/my/infoEdit/${path}`);
    };
    const goToHome = () => {
        navigate('/');
    };

    const user = useSelector((state: RootState) => state.user);

    // 로그아웃
    const dispatch = useDispatch();
    const logOut = () => {
        localStorage.removeItem('jwt_token');
        dispatch(logout());
        goToHome();
    };

    return (
        <div>
            <TopNaviBarBack pageName="내 정보" prevPath="/my" />
            <Container>
                <MenuWrapper>
                    <MenuName>가입 계정 (이매일)</MenuName>
                    <div style={{ marginTop: '4px' }}>{user.userEmail}</div>
                </MenuWrapper>
                <hr />
                <MenuWrapper>
                    <MenuName>이름</MenuName>
                    <InfoMenu onClick={() => goToEditPage('name')}>
                        <div>{user.userName}</div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </InfoMenu>
                </MenuWrapper>
                <hr />
                <MenuWrapper>
                    <MenuName>휴대폰 번호</MenuName>
                    <InfoMenu onClick={() => goToEditPage('phoneNumber')}>
                        <div>{user.userPhoneNum}</div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </InfoMenu>
                </MenuWrapper>
            </Container>
            <DevideLine />
            <Logout
                onClick={() => {
                    logOut();
                }}
            >
                로그아웃
            </Logout>
            <DevideLine />
            <DeleteAccount onClick={() => goToEditPage('withdraw')}>
                회원 탈퇴
            </DeleteAccount>
        </div>
    );
}

export default MyInfo;

const Container = styled.section`
    margin: 0 20px;
    height: 70vh;
`;

const MenuWrapper = styled.div`
    margin: 20px 0;
    div {
        font-size: 18px;
        font-weight: 600;
    }
`;

const MenuName = styled.span`
    color: #474747;
    font-size: 16px;
    pointer-events: none;
`;

const InfoMenu = styled.button`
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        font-size: 18px;
        font-weight: 600;
    }
`;

const Logout = styled.button`
    width: 100%;
    padding: 20px 20px;
    border: none;
    text-align: left;
    font-size: 16px;
`;

const DeleteAccount = styled.button`
    width: 100%;
    padding: 20px 20px;
    border: none;
    text-align: right;
    font-size: 14px;
`;
