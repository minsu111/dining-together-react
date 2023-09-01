import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import TopNaviBarBack from '../common/TopNaviBarBack';
import { emailRegEx, passwordRegEx } from '../../utils/utils';
import axiosRequest from '../../api/api';

type SignUpFormProps = {
    setSignUpForm: (key: string, value: string) => void;
    handleStartBtn: (key: string, value: boolean) => void;
};

const SignUpForm = ({ setSignUpForm, handleStartBtn }: SignUpFormProps) => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const [emailValid, setEmailValid] = useState(true);
    const [pwValid, setPwValid] = useState(false);
    const [pwConfirm, setPwConfirm] = useState('');
    const [pwMatch, setPwMatch] = useState(true);
    const [stateDuplicate, setStateDuplicate] = useState(0);

    const handleStartBtn111 = useCallback(
        (validState: boolean) => {
            handleStartBtn('signUpForm', validState);
        },
        [handleStartBtn],
    );

    const validState =
        emailValid &&
        pwValid &&
        pwMatch &&
        name.length > 0 &&
        phoneNum.length > 0;

    useEffect(() => {
        handleStartBtn111(validState);
    }, [validState, handleStartBtn111]);

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const curValue = e.target.value;
        switch (e.target.name) {
            case 'email':
                setEmail(curValue);
                setEmailValid(emailRegEx.test(curValue));
                break;
            case 'userName':
                setName(curValue);
                break;
            case 'phoneNum':
                setPhoneNum(curValue);
                break;
            case 'passwordInput':
                setPw(curValue);
                setPwValid(passwordRegEx.test(curValue));
                break;
            case 'passwordConfirm':
                setPwConfirm(curValue);
                setPwMatch(curValue === pw);

                break;
            default:
                break;
        }
    };

    // 이메일 중복 체크
    const checkDuplication = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateDuplicate(0);

        if (!emailRegEx.test(e.target.value)) {
            return;
        }

        try {
            const result = await axiosRequest(
                'GET',
                `/user/check?email=${email}`,
                {},
            );
            if (result.isDuplicated) {
                setStateDuplicate(1);
            } else {
                setStateDuplicate(2);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm('email', email);
        setSignUpForm('password', pw);
        setSignUpForm('name', name);
        setSignUpForm('phoneNum', phoneNum);
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
                        name="email"
                        // onChange={handleEmail}
                        onChange={handleChangeEvent}
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                            checkDuplication(e);
                            handleBlur(e);
                        }}
                    />

                    {!emailValid && email.length > 0 && (
                        <AlertMessageRed>
                            이메일 형식에 알맞게 입력해주세요.
                        </AlertMessageRed>
                    )}

                    {emailValid && stateDuplicate === 2 && (
                        <AlertMessageGreen>
                            사용 가능한 이메일입니다.
                        </AlertMessageGreen>
                    )}

                    {emailValid && stateDuplicate === 1 && (
                        <AlertMessageRed>
                            이미 사용 중인 이메일입니다.
                        </AlertMessageRed>
                    )}
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="text"
                        name="userName"
                        label="이름*"
                        placeholder="이름 입력해주세요."
                        width="350px"
                        // onChange={handleName}
                        onChange={handleChangeEvent}
                        onBlur={handleBlur}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="number"
                        name="phoneNum"
                        label="휴대폰 번호*"
                        placeholder="숫자만 입력해주세요."
                        width="350px"
                        // onChange={handlePhoneNum}
                        onChange={handleChangeEvent}
                        onBlur={handleBlur}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        inputType="password"
                        name="passwordInput"
                        label="비밀번호*"
                        placeholder="비밀번호를 입력해주세요."
                        width="350px"
                        // onChange={handlePassword}
                        onChange={handleChangeEvent}
                        onBlur={handleBlur}
                    />
                    <Input
                        inputType="password"
                        name="passwordConfirm"
                        placeholder="비밀번호를 다시 한 번 입력해주세요."
                        width="350px"
                        onChange={handleChangeEvent}
                        // onChange={handlePwConfirm}
                    />
                    {!pwValid && pw.length > 0 && (
                        <AlertMessageRed>
                            영문/숫자/특수기호 혼합 8~15자로 입력해주세요.
                        </AlertMessageRed>
                    )}
                    {!pwMatch && pwConfirm.length > 0 && (
                        <AlertMessageRed>
                            비밀번호가 일치하지 않습니다.
                        </AlertMessageRed>
                    )}
                </InputWrapper>
            </Section>
        </div>
    );
};

export default SignUpForm;

const Section = styled.section`
    margin: 20px 0;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
    padding: 20px;
`;

const AlertMessageRed = styled.div`
    font-size: 12px;
    color: red;
    padding: 8px 0 0 6px;
`;

const AlertMessageGreen = styled.div`
    font-size: 12px;
    color: green;
    padding: 8px 0 0 6px;
`;
