import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import LandscapeImg from '../../assets/landscape_photographer.svg';
import Button from '../../components/common/Button';
import SeleckUserType from '../../components/auth/SeleckUserType';
import SignUpForm from '../../components/auth/SignUpForm';
import AgreementCheckBox from '../../components/auth/AgreementCheckBox';
import ExtraInfo from '../../components/auth/ExtraInfo';
import axiosRequest from '../../api/api';
import { login } from '../../app/UserSlice';
import Terms from '../../components/auth/Terms';
import Privacy from '../../components/auth/Privacy';

const SignUpTest = () => {
    // 회원 유형 선택 상태 관리
    const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
    const [showExtraInfo, setShowExtraInfo] = useState<boolean>(false);
    const [isNextBtnEnabled, setIsNextBtnEnabled] = useState(false);
    const [viewTerms, setViewTerms] = useState<boolean>(false);
    const [viewPrivacy, setViewPrivacy] = useState<boolean>(false);

    const [checkState, setCheckState] = useState({
        signUpForm: false,
        agreement: false,
    });

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

    const handleTermsDetail = () => {
        setViewTerms(true);
    };
    const handlePrivacyDetail = () => {
        setViewPrivacy(true);
    };

    const handleOnClose = () => {
        setViewTerms(false);
        setViewPrivacy(false);
    };

    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };
    const goToHome = () => {
        navigate('/home');
    };

    const dispatch = useDispatch();

    const getUserInfo = async (userId: string) => {
        try {
            const result = await axiosRequest('GET', `/user/${userId}`, {});
            dispatch(
                login({
                    userId: `${result.userId}`,
                    userType: `${result.userType}`,
                    userEmail: `${result.email}`,
                    userName: `${result.name}`,
                    userPhoneNum: `${result.phoneNum}`,
                }),
            );
        } catch (error: any) {
            alert('조회 실패');
        }
    };

    const loginConfirm = async (email: string, password: string) => {
        try {
            const result = await axiosRequest('POST', '/user/login', {
                email,
                password,
            });

            // 로그인 성공 시 로컬스토리지에 토큰 저장 & 유저 정보 조회
            const loginToken = result.token;
            localStorage.setItem('jwt_token', loginToken);
            await getUserInfo(result.userId);
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
                if (result) {
                    loginConfirm(signUpData.email, signUpData.password);
                }
            } catch (error: any) {
                alert('회원가입 실패');
                localStorage.removeItem('userType');
                goToHome();
            }
        } else {
            setShowSignUpForm(false);
            setShowExtraInfo(true);
        }
    };

    return (
        <div>
            {!showSignUpForm &&
                !showExtraInfo &&
                !viewTerms &&
                !viewPrivacy && (
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
            {showSignUpForm && !viewTerms && !viewPrivacy && (
                <>
                    <SignUpForm
                        // signUpData={signUpData}
                        setSignUpForm={setSignUpForm}
                        handleStartBtn={handleStartBtn}
                    />
                    <AgreementCheckBox
                        handleStartBtn={handleStartBtn}
                        handleTermsDetail={handleTermsDetail}
                        handlePrivacyDetail={handlePrivacyDetail}
                    />
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
            {showExtraInfo && !viewTerms && !viewPrivacy && (
                <ExtraInfo signUpData={signUpData} />
            )}
            {viewTerms && <Terms handleOnClose={handleOnClose} />}
            {viewPrivacy && <Privacy handleOnClose={handleOnClose} />}
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
