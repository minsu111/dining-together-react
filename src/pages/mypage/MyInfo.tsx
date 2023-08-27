import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import DevideLine from '../../components/common/DevideLine';

function MyInfo() {
    const navigate = useNavigate();
    const goToEditPage = (path: string) => {
        navigate(`/my/infoEdit/${path}`);
    };

    return (
        <div>
            <Container style={{ height: '700px' }}>
                <TopNaviBarBack pageName="내 정보" prevPath="/my" />
                <MenuWrapper>
                    <MenuName>가입 계정 (이매일)</MenuName>
                    <div style={{ marginTop: '2px' }}>elice111@gmail.com</div>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuName>이름</MenuName>
                    <InfoMenu onClick={() => goToEditPage('name')}>
                        <div>엘리스</div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </InfoMenu>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuName>휴대폰 번호</MenuName>
                    <InfoMenu onClick={() => goToEditPage('phoneNumber')}>
                        <div>01012345678</div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </InfoMenu>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuName>비밀번호</MenuName>
                    <InfoMenu onClick={() => goToEditPage('password')}>
                        <div>********</div>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </InfoMenu>
                </MenuWrapper>
            </Container>
            <DevideLine />
            <Logout>로그아웃</Logout>
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
`;

const MenuWrapper = styled.div`
    margin: 30px 0;
`;

const MenuName = styled.span`
    cololr: #474747;
    font-size: 16px;
    pointer-events: none;
`;

const InfoMenu = styled.button`
    width: 100%;
    margin: 2px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        font-size: 18px;
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
