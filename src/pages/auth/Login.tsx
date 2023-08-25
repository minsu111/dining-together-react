import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import ConfirmPopup from '../../components/common/ConfirmPopup';

// dummy data
const UserInfo = {
    email: 'test111@gmail.com',
    password: 'test111!',
};

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isFailLogin, setIsFailLogin] = useState<boolean>(false);

    // 로그인 버튼 활성화 조건
    const activeButton = email.includes('@') && password.length >= 4;

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    };

    const loginConfirm = () => {
        if (email === UserInfo.email && password === UserInfo.password) {
            goToHome();
        } else {
            setIsFailLogin(true);
        }
    };

    return (
        <Section>
            <TopNaviBarBack pageName=" " prevPath="/" />
            <Title>
                반가워요🍻 <br />
                회식을 시작해볼까요?
            </Title>
            <InputWrapper>
                <EmailInput
                    placeholder="이메일 (아이디)"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputWrapper>
            {/* <div style={{ textAlign: 'left', marginTop: '10px' }}></div> */}
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
                    disabled={!activeButton}
                />
            </div>
            {isFailLogin && (
                <ConfirmPopup
                    title="로그인 실패"
                    contents="존재하지 않는 아이디거나
비밀번호가 일치하지 않습니다."
                />
            )}

            <SignInButton to="/join">이메일 회원가입</SignInButton>
        </Section>
    );
}

export default Login;

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
