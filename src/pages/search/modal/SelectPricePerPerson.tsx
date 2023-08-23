import React, { useState } from 'react';
import styled from 'styled-components';

const SelectPricePerPerson: React.FC<{ data: string }> = ({ data }) => {
    return (
        <Div>
            <SubTitle>가격 범위</SubTitle>

            <InputDiv>
                <InputSubDiv>
                    <Input type="number" defaultValue={0} />
                    <span style={{ fontWeight: 'bold' }}>만원</span>
                </InputSubDiv>
                <Tilde>~</Tilde>
                <InputSubDiv>
                    <Input type="number" defaultValue={40} />
                    <span style={{ fontWeight: 'bold' }}>만원</span>
                </InputSubDiv>
            </InputDiv>
        </Div>
    );
};

export default SelectPricePerPerson;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
    gap: 40px;
`;

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
`;

const InputDiv = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
`;

const InputSubDiv = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    border-bottom: 2px solid black;
    justify-content: space-evenly;
    align-items: center;
`;

const Input = styled.input`
    width: 50px;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: bold;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none; /* 기본 포커스 효과 제거 */
        border-color: transparent; /* 커서 활성화 상태에서는 border를 투명하게 설정 */
    }
`;

const Tilde = styled.strong`
    font-size: 20px;
    font-weight: 1000;
`;
