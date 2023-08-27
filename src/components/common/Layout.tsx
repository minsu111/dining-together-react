import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GNBArea from './GNB';

const Layout = () => {
    return (
        <WholeWrap>
            <Wrap>
                <Outlet />
            </Wrap>
            <GNBArea />
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
