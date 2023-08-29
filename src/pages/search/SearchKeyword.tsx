import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import backArrowIcon from '../../assets/arrow-left-solid.svg';
import DevideLine from '../../components/common/DevideLine';
import SolidLine from './SolidLine';
import Button from '../../components/common/Button';
import StoreItem from './StoreItem';
import axiosRequest from '../../api/api';

function SearchKeyword() {
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate();
    const handleBackButtonClick = () => {
        navigate(-1); // -1을 전달하여 브라우저 뒤로 가기 동작 수행
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('handleSubmit');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const [storeName, setStoreName] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const keywordSearch = async () => {
        // api 호출
        try {
            console.log('검색어: ', keyword);

            const result = await axiosRequest('POST', '/stores/search', {
                storeName,
                keyword,
            });

            setShowResult(true);

            console.log('result:', result);
        } catch (error: any) {
            const errorStatus = error.status;
            switch (errorStatus) {
                case 404:
                    alert('가게 없음');
                    break;
                case 500:
                    alert('오류가 발생했습니다. 다시 한 번 시도해주세요.');
                    break;
                default:
                    break;
            }
            console.log('error:', error);
        }
    };

    return (
        <Div>
            <Div2>
                <form onSubmit={handleSubmit} id="keywordForm">
                    <HeaderDiv>
                        <BackButton onClick={handleBackButtonClick}>
                            <img src={backArrowIcon} alt="back arrow icon" />
                        </BackButton>
                        <Input
                            placeholder="식당명, 키워드로 찾아보세요"
                            onChange={handleInputChange}
                            required
                        />
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
                </form>
            </Div2>
            <FooterDiv>
                <SolidLine />
                <div style={{ margin: '20px auto' }}>
                    <Button
                        type="submit"
                        text="검색"
                        onClick={() => {
                            keywordSearch();
                        }}
                        // form="keywordForm"
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
    align-items: center;
`;

const BackButton = styled.button`
    width: 17px;
    margin: 0 6px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Input = styled.input`
    width: 300px;
    height: 30px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    padding-left: 10px;

    &:focus {
        outline: none;
        border-color: transparent;
    }
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
