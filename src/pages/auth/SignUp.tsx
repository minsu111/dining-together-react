import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import LandscapeImg from '../../assets/landscape_photographer.svg';
import Button from '../../components/common/Button';
import SeleckUserType from '../../components/Auth/SeleckUserType';
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
    const handleStartBtn = useCallback((key: string, value: boolean) => {
        setCheckState((prev) => ({ ...prev, [key]: value }));
        // console.log('setCheckState', checkState);
    }, []);

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

    const loginConfirm = async (email: string, password: string) => {
        // 로그인 api 호출
        try {
            const result = await axiosRequest('POST', '/user/login', {
                email,
                password,
            });
            console.log(
                '🚀 ~ file: SignUp.tsx:62 ~ loginConfirm ~ result:',
                result,
            );

            // 로컬스토리지에 토큰 저장
            const loginToken = result.token;
            localStorage.setItem('jwt_token', loginToken);

            // const decodedToken = jwt.verify(loginToken, '');
            // console.log(decodedToken);

            goToWelcome();
        } catch (error: any) {
            alert(
                `오류가 발생했습니다. 다시 한 번 시도해주세요. 
                    ${error.data.status}`,
            );
        }
    };

    const handleStartClick = async () => {
        if (signUpData.userType === '2') {
            try {
                const result = await axiosRequest(
                    'POST',
                    '/user/signup',
                    signUpData,
                );
                loginConfirm(signUpData.email, signUpData.password);
                console.log(
                    '🚀 ~ file: Login.tsx:37 ~ loginConfirm ~ result:',
                    result,
                );
            } catch (error: any) {
                alert('회원가입 실패');
                localStorage.removeItem('userType');
            }
        } else {
            setShowSignUpForm(false);
            setShowExtraInfo(true);
        }
    };

    return (
        <div>
            {!showSignUpForm && !showExtraInfo && (
                <>
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
                        <SeleckUserType
                            userType={signUpData.userType}
                            onOptionChange={handleOptionChange}
                        />
                        <Button
                            text="다음"
                            onClick={handleNextClick}
                            disabled={!isNextBtnEnabled}
                        />
                    </Wrapper>
                </>
            )}
            {showSignUpForm && (
                <>
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
                </>
            )}
            {showExtraInfo && <ExtraInfo signUpData={signUpData} />}
        </div>
    );
};

export default SignUpTest;

const Title = styled.h1`
    font-size: 34px;
    font-weight: 500;
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
