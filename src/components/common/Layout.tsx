import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GNBArea from './GNB';

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <WholeWrap>
            <Wrap>
                <Outlet />
            </Wrap>
            {pathname === '/join' ||
            pathname === '/join/welcome' ||
            pathname === '/my/info' ||
            pathname === '/my/infoEdit/name' ||
            pathname === '/my/infoEdit/phoneNumber' ||
            pathname === '/store/:storeId' ||
            pathname === '/search/keyword' ||
            pathname === '/search/list' ||
            pathname === '/my/store' ||
            pathname === '/my/store/fin' ||
            pathname === '/my/store/detail' ||
            pathname === '/my/infoEdit/withdraw' ? (
                ''
            ) : (
                <GNBArea />
            )}
        </WholeWrap>
    );
};

export default Layout;

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
    padding-bottom: 70px;

    &::-webkit-scrollbar {
        display: none;
    }
`;
