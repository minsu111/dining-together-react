import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backArrowIcon from '../../assets/arrow-left-solid.svg';

function TopNaviBarBack(props: { pageName: string; prevPath?: string }) {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        if (props.prevPath) navigate(props.prevPath);
        else navigate(-1); // -1을 전달하여 브라우저 뒤로 가기 동작 수행
    };

    return (
        <Container>
            <Button onClick={handleBackButtonClick}>
                <img src={backArrowIcon} alt="back arrow icon" />
            </Button>
            <Title>{props.pageName}</Title>
        </Container>
    );
}

export default TopNaviBarBack;

const Container = styled.div`
    width: 390px;
    height: 48px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Button = styled.button`
    width: 17px;
    margin: 0 6px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;
