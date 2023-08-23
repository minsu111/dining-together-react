import React from 'react';
import styled from 'styled-components';
import backArrowIcon from '../../assets/arrow-left-solid.svg';
import DevideLine from '../../components/common/DevideLine';
import SolidLine from './SolidLine';
import Button from '../../components/common/Button';

function SearchKeyword() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <Div>
            <div>
                <HeaderDiv>
                    <BackButton onClick={() => {}}>
                        <img src={backArrowIcon} alt="back arrow icon" />
                    </BackButton>
                    <Input placeholder="식당명, 키워드로 찾아보세요" />
                </HeaderDiv>
                <DevideLine />
            </div>
            <FooterDiv>
                <SolidLine />
                <div style={{ margin: '20px auto' }}>
                    <Button text="검색" onClick={() => {}} />
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
