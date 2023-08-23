import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
// import Button from '../../components/common/Button';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import TagButton from '../../components/common/Tag';

const ExtraInfo = () => {
    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };

    return (
        <section>
            <Title>
                회식장소 추천을 위해
                <br />
                간단한 정보를 선택해주세요
            </Title>
            <Question>주로 어디서 회식하시나요?</Question>
            <Question>어떤 모임이 있으신가요?</Question>
            <TagButton value="직장" />
            {/* <Button text="선택 완료" onClick={goToWelcome} /> */}
            <div>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </section>
    );
};
export default ExtraInfo;

// const Section = styled.section`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 100vw;
//     max-width: 390px;
//     height: 100vh;

//     left: 50%;
//     transform: translate(-50%, 0);
//     overflow: hidden;

//     display: flex;
//     flex-direction: column;
//     border: 1px solid #e8e8e8;
// `;

const Title = styled.h1`
    font-size: 30px;
    line-height: 40px;
    padding: 70px 20px;
`;

const Question = styled.h2`
    font-size: 22px;
    line-height: 30px;
    padding: 20px;
`;
