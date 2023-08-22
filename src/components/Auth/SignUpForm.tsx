import React from 'react';
import styled from 'styled-components';
import InputTextArea from '../common/InputText';
import TopNaviBarBack from '../common/TopNaviBarBack';

function SignUpForm() {
    return (
        <div>
            <TopNaviBarBack pageName="회원가입" prevPath="/login" />
            <Section>
                <Form onSubmit={() => {}}>
                    <InputWrapper>
                        <InputTextArea
                            type="email"
                            prop1={{ value: '이메일(아이디)*' }}
                            prop2={{ value: '이메일을 입력해주세요.' }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTextArea
                            type="text"
                            prop1={{ value: '이름*' }}
                            prop2={{ value: '이름 입력해주세요.' }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTextArea
                            type="tel"
                            prop1={{ value: '휴대폰 번호*' }}
                            prop2={{ value: '숫자만 입력해주세요.' }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputTextArea
                            type="password"
                            prop1={{ value: '비밀번호*' }}
                            prop2={{ value: '비밀번호를 입력해주세요.' }}
                        />
                        <InputTextArea
                            type="password"
                            prop1={{ value: '' }}
                            prop2={{
                                value: '비밀번호를 다시 한 번 입력해주세요.',
                            }}
                        />
                    </InputWrapper>
                </Form>
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
