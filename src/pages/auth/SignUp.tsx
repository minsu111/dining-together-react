import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import LandscapeImg from '../../assets/landscape_photographer.svg';
import Button from '../../components/common/Button';
import CheckBox from '../../components/Auth/CheckBox';
import SignUpForm from '../../components/Auth/SignUpForm';
import AgreementCheckBox from '../../components/Auth/AgreementCheckBox';
import ExtraInfo from '../../components/Auth/ExtraInfo';
import axiosRequest from '../../api/api';

const SignUpTest = () => {
    // 회원 유형 선택 상태 관리
    const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
    const [showExtraInfo, setShowExtraInfo] = useState<boolean>(false);
    const [isNextBtnEnabled, setIsNextBtnEnabled] = useState(false);
    const [checkState, setCheckState] = useState({
        signUpForm: false,
        agreement: false,
    });
    // const [checkValid, setCheckValid] = useState({})
    // 회원가입 폼 관리
    const [signUpData, setSignUpData] = useState({
        userType: '',
        email: '',
        name: '',
        phoneNum: '',
        password: '',
    });

    const handleStartBtn = (key: string, value: boolean) => {
        setCheckState((prev) => ({ ...prev, [key]: value }));
        console.log('setCheckState', checkState);
    };

    const setSignUpForm = (key: string, value: string) => {
        setSignUpData((prev) => ({ ...prev, [key]: value }));
    };

    const handleOptionChange = (option: any) => {
        setSignUpForm('userType', option);
        setIsNextBtnEnabled(true);
    };

    const handleNextClick = () => {
        setShowSignUpForm(true);
    };

    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };

    const handleStartClick = async () => {
        if (signUpData.userType === '2') {
            try {
                const result = await axiosRequest('POST', '/user/signup', {
                    signUpData,
                });
                // 로컬스토리지에 토큰 저장
                if (result.data.token) {
                    localStorage.setItem('jwt_token', result.data.token);
                    goToWelcome();
                }
                console.log(
                    '🚀 ~ file: Login.tsx:37 ~ loginConfirm ~ result:',
                    result,
                );
            } catch (error: any) {
                alert('회원가입 실패');
            }
        } else {
            setShowSignUpForm(false);
            setShowExtraInfo(true);
        }
    };

    return (
        <div>
            {!showSignUpForm && !showExtraInfo && (
                <Section>
                    <TopNaviBarBack pageName=" " prevPath="/login" />
                    <Title>
                        가입 목적을 <br />
                        알려주세요
                    </Title>
                    <Wrapper>
                        <img
                            src={LandscapeImg}
                            alt="가입목적을 알려주세요"
                            style={{ width: '54%' }}
                        />
                        <CheckBox
                            userType={signUpData.userType}
                            onOptionChange={handleOptionChange}
                        />
                        <Button
                            text="다음"
                            onClick={handleNextClick}
                            disabled={!isNextBtnEnabled}
                        />
                    </Wrapper>
                </Section>
            )}
            {showSignUpForm && (
                <Section>
                    <SignUpForm
                        // signUpData={signUpData}
                        setSignUpForm={setSignUpForm}
                        handleStartBtn={handleStartBtn}
                    />
                    <AgreementCheckBox handleStartBtn={handleStartBtn} />
                    <Wrapper>
                        <Button
                            text="시작하기"
                            // type="submit"
                            onClick={handleStartClick}
                            disabled={
                                !checkState.signUpForm || !checkState.agreement
                            }
                        />
                    </Wrapper>
                </Section>
            )}
            {showExtraInfo && <ExtraInfo signUpData={signUpData} />}
        </div>
    );
};

export default SignUpTest;

const Section = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    max-width: 390px;

    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;

    display: flex;
    flex-direction: column;
    border: 1px solid #e8e8e8;
`;

const Title = styled.h1`
    font-size: 34px;
    line-height: 45px;
    padding: 30px 20px;
    margin-bottom: 40px;
`;

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
