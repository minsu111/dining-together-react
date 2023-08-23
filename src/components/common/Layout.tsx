import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
    return (
        <WholeWrap>
            <Wrap>
                <Outlet />
            </Wrap>
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
    border-radius: 20px;
    border: 1px solid #999;
    overflow-y: scroll;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0);

    &::-webkit-scrollbar {
        display: none;
    }
`;
