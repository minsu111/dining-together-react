import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import DimmedLayer from '../../components/common/DimmedLayer';
import MainButton from '../../components/common/MainButton';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Section>
            <TopNaviBarBack prevPath={'/'} />
            <Title>
                반가워요🍻 <br />
                회식을 시작해볼까요?
            </Title>
            <InputWrapper>
                <EmailInput placeholder="이메일 (아이디)" type="text" />
                <PasswordInput placeholder="비밀번호" type="password" />
            </InputWrapper>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <MainButton value="로그인" />
            </div>
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
`;
const PasswordInput = styled.input`
    all: unset;
    border-bottom: 1px solid #e8e8e8;
    width: 85%;
    margin-top: 46px;
    padding: 4px;
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
