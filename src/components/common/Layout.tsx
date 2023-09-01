import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import GNBArea from './GNB';
import BgImg from '../../assets/Group 1532.svg';
import Insta from '../../assets/logo-instagram.svg';
import Facebook from '../../assets/logo-facebook.svg';

const Layout = () => {
    const { pathname } = useLocation();

    type HandleClickType = (event: React.MouseEvent<HTMLButtonElement>) => void;

    const handleInstaClick: HandleClickType = () => {
        window.open('https://www.instagram.com/dining_togetherr/');
    };

    const handleFacebookClick: HandleClickType = () => {
        window.open(
            'https://www.facebook.com/profile.php?id=61550831071342&mibextid=LQQJ4d',
        );
    };

    const shouldShowGNBArea =
        pathname === '/' ||
        pathname === '/login' ||
        pathname === '/search' ||
        pathname === '/reservationList' ||
        pathname === '/my';

    return (
        <Background>
            <BackgroundImg>
                <img src={BgImg} alt="로고이미지" />
            </BackgroundImg>
            <LogoWrapper>
                <SocialBtn type="button" onClick={handleInstaClick}>
                    <img src={Insta} alt="인스타그램" />
                </SocialBtn>
                <SocialBtn type="button" onClick={handleFacebookClick}>
                    <img src={Facebook} alt="로고이미지" />
                </SocialBtn>
            </LogoWrapper>
            <WholeWrap>
                <Wrap>
                    <Outlet />
                </Wrap>
                {shouldShowGNBArea && <GNBArea />}
            </WholeWrap>
        </Background>
    );
};

export default Layout;

const Background = styled.section`
    width: 100%;
    background-color: #ffc53e;

    @media (max-width: 768px) {
        width: 100%;
        background-color: #fff;
    }
`;

const BackgroundImg = styled.section`
    position: absolute;
    width: 460px;
    height: auto;
    padding: 100px 20px;
    margin: 0 30px;
    top: 25%;

    @media (max-width: 1080px) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    img {
        width: 40px;
        margin: 0 4px;
    }
`;

const SocialBtn = styled.button`
    cursor: pointer;
    z-index: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

const WholeWrap = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Wrap = styled.div`
    width: 390px;
    height: 100vh;
    background-color: #fff;
    box-shadow:
        -5px 0 5px rgba(0, 0, 0, 0.1),
        5px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
