import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import axiosRequest from '../../api/api';
import { emailRegEx } from '../../utils/utils';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import ConfirmPopup from '../../components/common/ConfirmPopup';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailValid, setEmailValid] = useState(false);
    const [isFailLogin, setIsFailLogin] = useState<boolean>(false);

    // email 밸리데이션
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailValid(emailRegEx.test(e.target.value));
    };

    // 비밀번호 length 확인
    const activeButton = password.length >= 4;

    // '확인' 버튼 클릭 시 팝업 닫기
    const closeFailLoginPopup = () => {
        setIsFailLogin(false);
    };

    const loginConfirm = async () => {
        // 로그인 api 호출
        try {
            const result = await axiosRequest('POST', '/user/login', {
                email,
                password,
            });
            // 로컬스토리지에 토큰 저장
            if (result.data.token) {
                localStorage.setItem('jwt_token', result.data.token);
            }
            console.log(
                '🚀 ~ file: Login.tsx:37 ~ loginConfirm ~ result:',
                result,
            );
        } catch (error: any) {
            const errorStatus = error.status;
            switch (errorStatus) {
                case 401:
                    setIsFailLogin(true);
                    break;
                case 500:
                    alert('오류가 발생했습니다. 다시 한 번 시도해주세요.');
                    break;
                default:
                    break;
            }
            console.log(
                '🚀 ~ file: Login.tsx:40 ~ loginConfirm ~ error:',
                error,
            );
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
            {isFailLogin && (
                <ConfirmPopup
                    title="로그인 실패"
                    contents="존재하지 않는 아이디거나
비밀번호가 일치하지 않습니다."
                    onClose={closeFailLoginPopup}
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
