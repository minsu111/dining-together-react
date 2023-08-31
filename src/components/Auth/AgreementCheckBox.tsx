import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Terms from './Terms';

type CheckBoxProps = {
    handleStartBtn: (key: string, value: boolean) => void;
    handleTermsDetail: () => void;
    handlePrivacyDetail: () => void;
};

const AgreementCheckBox = ({
    handleStartBtn,
    handleTermsDetail,
    handlePrivacyDetail,
}: CheckBoxProps) => {
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false);

    useEffect(() => {
        setIsAllChecked(isTermsChecked && isPrivacyChecked);
    }, [isTermsChecked, isPrivacyChecked]);

    const handleAllChange = () => {
        const newValue = !isAllChecked;
        setIsAllChecked(newValue);
        setIsTermsChecked(newValue);
        setIsPrivacyChecked(newValue);
        handleStartBtn('agreement', newValue);
    };

    const handleTermsChange = () => {
        handleStartBtn('agreement', !isTermsChecked && isPrivacyChecked);
        setIsTermsChecked(!isTermsChecked);
    };

    const handlePrivacyChange = () => {
        handleStartBtn('agreement', isTermsChecked && !isPrivacyChecked);
        setIsPrivacyChecked(!isPrivacyChecked);
    };

    return (
        <Container>
            <CheckBoxLabel htmlFor="input">
                <CheckInput
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={handleAllChange}
                />
                <span style={{ fontWeight: '700', fontSize: '18px' }}>
                    이용약관 전체 동의
                </span>
            </CheckBoxLabel>
            <Line />
            <BoxWrapper>
                <CheckBoxLabel htmlFor="input">
                    <CheckInput
                        type="checkbox"
                        checked={isTermsChecked}
                        onChange={handleTermsChange}
                    />
                    <span>[필수] 회식어때 이용 약관 동의</span>
                </CheckBoxLabel>
                <GoToContents onClick={handleTermsDetail}>보기</GoToContents>
            </BoxWrapper>

            <BoxWrapper>
                <CheckBoxLabel htmlFor="input">
                    <CheckInput
                        type="checkbox"
                        checked={isPrivacyChecked}
                        onChange={handlePrivacyChange}
                    />
                    <span>[필수] 개인정보 처리방침 동의</span>
                </CheckBoxLabel>
                <GoToContents onClick={handlePrivacyDetail}>보기</GoToContents>
            </BoxWrapper>
        </Container>
    );
};

export default AgreementCheckBox;

const Container = styled.div`
    height: 150px;
    line-height: 30px;
    padding: 10px 20px;
`;

const CheckInput = styled.input<{ checked: boolean }>`
    appearance: none;
    margin: 0 10px 2px 0px;
    vertical-align: middle;
    border: max(2px, 0.1em) solid gray;
    border-radius: 4px;
    width: 1.2em;
    height: 1.2em;
    transition: border 0.3s ease-in-out;
    cursor: pointer;
`;

const CheckBoxLabel = styled.label`
    input:checked {
        border: 0.4em solid #ffb100;
        background-image: url('../../assets/square-check-solid.svg');
        background: $white no-repeat center center;
    }
    & > span {
        font-size: 16px;
    }
`;

const Line = styled.hr`
    margin: 4px 0;
`;

const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GoToContents = styled.button`
    all: unset;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid #afb1b6;
    line-height: 18px;
`;
