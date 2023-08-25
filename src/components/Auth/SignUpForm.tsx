import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import TopNaviBarBack from '../common/TopNaviBarBack';
import { emailRegEx, passwordRegEx } from '../../utils/utils';

function SignUpForm() {
    const [emailValid, setEmailValid] = useState(true);
    const [pwValid, setPwValid] = useState(false);
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [pwMatch, setPwMatch] = useState(true);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailRegEx.test(e.target.value)) {
            console.log(
                '🚀 ~ file: SignUpForm.tsx:14 ~ handleEmail ~ e.target.value:',
                e.target.value,
            );
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
        console.dir(e.target.value);
    };

    const checkDuplicates = () => {};

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
        if (passwordRegEx.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };

    const handlePwConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPasswordConfirm = e.target.value;
        setPwConfirm(newPasswordConfirm);

        if (newPasswordConfirm === pw) {
            setPwMatch(true);
        } else {
            setPwMatch(false);
        }
    };

    return (
        <div>
            <TopNaviBarBack pageName="회원가입" prevPath="/login" />
            <Section>
                <InputWrapper>
                    <Input
                        inputType="email"
                        label="이메일(아이디)*"
                        placeholder="이메일을 입력해주세요."
                        width="350px"
                        onBlur={checkDuplicates}
                        onChange={handleEmail}
                    />

                    {!emailValid && email.length > 0 && (
                        <AlertMessage>
                            이메일 형식에 알맞게 입력해주세요.
                        </AlertMessage>
                    )}
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="text"
                        label="이름*"
                        placeholder="이름 입력해주세요."
                        width="350px"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="number"
                        label="휴대폰 번호*"
                        placeholder="숫자만 입력해주세요."
                        width="350px"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="password"
                        label="비밀번호*"
                        placeholder="비밀번호를 입력해주세요."
                        width="350px"
                        onChange={handlePassword}
                    />
                    <Input
                        inputType="password"
                        placeholder="비밀번호를 다시 한 번 입력해주세요."
                        width="350px"
                        onChange={handlePwConfirm}
                    />
                    {!pwValid && pw.length > 0 && (
                        <AlertMessage>
                            영문/숫자/특수기호 혼합 8~15자로 입력해주세요.
                        </AlertMessage>
                    )}
                    {!pwMatch && pwConfirm.length > 0 && (
                        <AlertMessage>
                            비밀번호가 일치하지 않습니다.
                        </AlertMessage>
                    )}
                </InputWrapper>
            </Section>
        </div>
    );
}

export default SignUpForm;

const Section = styled.section`
    margin: 20px 0;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
    padding: 20px;
`;

const AlertMessage = styled.div`
    font-size: 12px;
    color: red;
    padding: 8px 0 0 6px;
`;
