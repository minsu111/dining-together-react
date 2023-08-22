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
        <div>
            <label htmlFor="input">
                <input
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={handleAllChange}
                />
                이용약관 전체 동의
            </label>

            <div>
                <label htmlFor="input">
                    <input
                        type="checkbox"
                        checked={isTermsChecked}
                        onChange={handleTermsChange}
                    />
                    [필수] 회식어때 이용 약관 동의
                    <Link to="/terms">보기</Link>
                </label>
            </div>

            <div>
                <label htmlFor="input">
                    <input
                        type="checkbox"
                        checked={isPrivacyChecked}
                        onChange={handlePrivacyChange}
                    />
                    [필수] 개인정보 처리방침 동의
                    <Link to="/terms">보기</Link>
                </label>
            </div>
        </div>
    );
};

export default AgreementCheckBox;

const CheckAll = styled.label``;
