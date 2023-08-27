import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    createMultiStyleConfigHelpers,
    defineStyle,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CommonButton from '../../components/common/Button';
import TagButton from '../../components/common/Tag';

const ExtraInfo = () => {
    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };

    return (
        <section>
            <Title>
                🍻
                <br />
                회식장소 추천을 위해
                <br />
                추가 정보를 선택해주세요
            </Title>
            <Question>주로 어디서 회식하시나요?</Question>
            <MenuWrapper>
                <Menu size="xl">
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        지역을 선택해 주세요.
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => {}}>서울 전체</MenuItem>
                        <MenuItem>강남</MenuItem>
                        <MenuItem>서초</MenuItem>
                        <MenuItem>잠실/송파/강동</MenuItem>
                        <MenuItem>영등포/여의도/강서</MenuItem>
                        <MenuItem>건대/성수/왕십리</MenuItem>
                        <MenuItem>종로/중구</MenuItem>
                        <MenuItem>홍대/합정/마포</MenuItem>
                        <MenuItem>용산/이태원/한남</MenuItem>
                        <MenuItem>성북/노원/중랑</MenuItem>
                        <MenuItem>구로/관악/동작</MenuItem>
                    </MenuList>
                </Menu>
            </MenuWrapper>

            <Question>어떤 모임이 있으신가요?</Question>
            <TagButtonWrapper>
                <TagButton value="직장 모임" />
                <TagButton value="대학교 모임" />
                <TagButton value="동아리 모임" />
                <br />
                <TagButton value="비즈니스 미팅" />
                <TagButton value="가족 행사" />
                <TagButton value="스포츠 동호회" />
                <TagButton value="동창회" />
                <TagButton value="업계 네트워킹" />
            </TagButtonWrapper>
            <Wrapper>
                <CommonButton text="선택 완료" onClick={goToWelcome} />
            </Wrapper>
        </section>
    );
};
export default ExtraInfo;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    padding: 70px 20px 10px 20px;
`;

const Question = styled.h2`
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    margin: 30px 20px 20px 20px;
`;

const MenuWrapper = styled.div`
    margin-left: 20px;
`;

const TagButtonWrapper = styled.div`
    width: 80%;
    margin: 10px 20px;
`;

const Wrapper = styled.div`
    text-align: center;
    margin: 50px 0 20px 0;
`;
