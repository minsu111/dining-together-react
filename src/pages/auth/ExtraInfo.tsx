import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CommonButton from '../../components/common/Button';
import TagButton from '../../components/common/TagButton';

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
            <Select
                ml="20px"
                mr="20px"
                w="350px"
                placeholder="지역을 선택해 주세요"
            >
                <option value="서울 전체">서울 전체</option>
                <option value="강남">강남</option>
                <option value="서초">서초</option>
                <option value="잠실/송파/강동">잠실/송파/강동</option>
                <option value="영등포/여의도/강서">영등포/여의도/강서</option>
                <option value="건대/성수/왕십리">건대/성수/왕십리</option>
                <option value="종로/중구">종로/중구</option>
                <option value="홍대/합정/마포">홍대/합정/마포</option>
                <option value="용산/이태원/한남">용산/이태원/한남</option>
                <option value="성북/노원/중랑">성북/노원/중랑</option>
                <option value="구로/관악/동작">구로/관악/동작</option>
            </Select>

            <Question>어떤 모임이 있으신가요?</Question>
            <TagButtonWrapper>
                <TagButton name="직장 모임" />
                <TagButton name="대학교 모임" />
                <TagButton name="동아리 모임" />
                <br />
                <TagButton name="비즈니스 미팅" />
                <TagButton name="가족 행사" />
                <TagButton name="스포츠 동호회" />
                <TagButton name="동창회" />
                <TagButton name="업계 네트워킹" />
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

const TagButtonWrapper = styled.div`
    width: 80%;
    margin: 10px 20px;
`;

const Wrapper = styled.div`
    text-align: center;
    margin: 50px 0 20px 0;
`;
