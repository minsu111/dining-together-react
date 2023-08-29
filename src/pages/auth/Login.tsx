import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import axiosRequest from '../../api/api';
import { emailRegEx } from '../../utils/utils';
import Button from '../../components/common/Button';
import ConfirmPopup from '../../components/common/ConfirmPopup';
import { login } from '../../app/UserSlice';
import HandleError from '../../utils/Error';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailValid, setEmailValid] = useState(false);
    const [popupState, setPopupState] = useState<boolean>(false);

    // email 밸리데이션
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailValid(emailRegEx.test(e.target.value));
    };

    // 비밀번호 length 확인
    const activeButton = password.length >= 4;

    // '확인' 버튼 클릭 시 팝업 닫기
    const closePopup = () => {
        setPopupState(false);
    };

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
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
            console.log('조회 실패');
        }
    };
    // 로그인 api 호출
    const loginConfirm = async () => {
        const result = await axiosRequest(
            'POST',
            '/user/login',
            {
                email,
                password,
            },
            setPopupState,
            HandleError,
        );
        // 로컬스토리지에 토큰 저장
        if (result) {
            localStorage.setItem('jwt_token', result.token);
            await getUserInfo(result.userId);
            goToHome();
        }
    };

    return (
        <Section>
            <Title>
                반가워요🍻 <br />
                회식을 시작해볼까요?
            </Title>
            <InputWrapper>
                <EmailInput
                    placeholder="이메일 (아이디)"
                    type="text"
                    value={email}
                    onChange={handleEmail}
                />
            </InputWrapper>
            <InputWrapper>
                <PasswordInput
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputWrapper>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Button
                    text="로그인"
                    onClick={loginConfirm}
                    disabled={!emailValid || !activeButton}
                />
            </div>
            {popupState && (
                <ConfirmPopup
                    title="로그인 실패"
                    contents="존재하지 않는 아이디거나
비밀번호가 일치하지 않습니다."
                    onClose={closePopup}
                />
            )}

            <SignInButton to="/join">이메일 회원가입</SignInButton>
        </Section>
    );
}

export default Login;

const Section = styled.section`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 34px;
    font-weight: 500;
    line-height: 45px;
    padding: 30px 20px;
    margin-bottom: 40px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EmailInput = styled.input`
    all: unset;
    border-bottom: 1px solid #e8e8e8;
    width: 85%;
    padding: 4px;

    &:focus-within {
        border-bottom: 1px solid black;
    }
`;

const PasswordInput = styled.input`
    all: unset;
    border-bottom: 1px solid #e8e8e8;
    width: 85%;
    margin-top: 46px;
    padding: 4px;

    &:focus-within {
        border-bottom: 1px solid black;
    }
`;

const SignInButton = styled(Link)`
    font-size: 14px;
    color: #474747;
    padding: 12px 22px;
    text-align: right;
    text-decoration: underline;
    text-decoration-color: #474747;

    cursor: pointer;
`;
