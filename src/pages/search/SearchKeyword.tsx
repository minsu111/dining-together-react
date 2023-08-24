import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import backArrowIcon from '../../assets/arrow-left-solid.svg';
import DevideLine from '../../components/common/DevideLine';
import SolidLine from './SolidLine';
import Button from '../../components/common/Button';
import StoreItem from './StoreItem';

function SearchKeyword() {
    const [showResult, setShowResult] = useState(false);

    console.log(showResult);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <Div>
            <Div2>
                <HeaderDiv>
                    <BackButton onClick={() => {}}>
                        <img src={backArrowIcon} alt="back arrow icon" />
                    </BackButton>
                    <Input placeholder="식당명, 키워드로 찾아보세요" />
                </HeaderDiv>
                <DevideLine />
                <ResultDiv isHidden={!showResult}>
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                    <StoreItem
                        isKeywordSearch
                        name="가게1"
                        description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    />
                </ResultDiv>
            </Div2>
            <FooterDiv>
                <SolidLine />
                <div style={{ margin: '20px auto' }}>
                    <Button
                        text="검색"
                        onClick={() => {
                            setShowResult(true);
                        }}
                    />
                </div>
            </FooterDiv>
        </Div>
    );
}

export default SearchKeyword;

const Div = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Div2 = styled.div`
    height: calc(100% - 93px);
    display: flex;
    flex-direction: column;
`;

const HeaderDiv = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    gap: 7px;
    align-items: flex-start;
`;

const BackButton = styled.button`
    width: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Input = styled.input`
    width: 300px;
    height: 24px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
`;

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

interface ResultDivProps {
    isHidden: boolean;
}
const ResultDiv = styled.div<ResultDivProps>`
    flex: 1;
    //width: 100%;
    //height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow-y: auto;

    ${(props) =>
        props.isHidden &&
        css`
            display: none;
        `}
`;
