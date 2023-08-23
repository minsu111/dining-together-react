import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const AgreementCheckBox = () => {
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false);

    useEffect(() => {
        if (isTermsChecked && isPrivacyChecked) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    }, [isTermsChecked, isPrivacyChecked]);

    const handleAllChange = () => {
        const newValue = !isAllChecked;
        setIsAllChecked(newValue);
        setIsTermsChecked(newValue);
        setIsPrivacyChecked(newValue);
    };

    const handleTermsChange = () => {
        setIsTermsChecked(!isTermsChecked);
    };

    const handlePrivacyChange = () => {
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

                    <GoToContents to="/terms">보기</GoToContents>
                </CheckBoxLabel>
            </BoxWrapper>

            <div>
                <CheckBoxLabel htmlFor="input">
                    <CheckInput
                        type="checkbox"
                        checked={isPrivacyChecked}
                        onChange={handlePrivacyChange}
                    />
                    <span>[필수] 개인정보 처리방침 동의</span>
                    <GoToContents to="/terms">보기</GoToContents>
                </CheckBoxLabel>
            </div>
        </Container>
    );
};

export default AgreementCheckBox;

const Container = styled.div`
    height: 150px;
    line-height: 30px;
    padding: 10px 20px;
`;

const CheckAll = styled.label``;

const CheckInput = styled.input`
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
    & > span {
        font-size: 16px;
    }
`;

const Line = styled.hr``;

const BoxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const GoToContents = styled(Link)`
    all: unset;
    cursor: pointer;
    border-bottom: 1px solid #afb1b6;
`;
