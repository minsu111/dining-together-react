import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import TopNaviBarBack from '../common/TopNaviBarBack';

function SignUpForm() {
    return (
        <div>
            <TopNaviBarBack pageName="회원가입" prevPath="/login" />
            <Section>
                <Form onSubmit={() => {}}>
                    <InputWrapper>
                        <Input
                            inputType="email"
                            label="이메일(아이디)*"
                            placeholder="이메일을 입력해주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            inputType="text"
                            label="이름*"
                            placeholder="이름 입력해주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            inputType="tel"
                            label="휴대폰 번호*"
                            placeholder="숫자만 입력해주세요."
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            inputType="password"
                            label="비밀번호*"
                            placeholder="비밀번호를 입력해주세요."
                        />
                        <Input
                            inputType="password"
                            placeholder="비밀번호를 다시 한 번 입력해주세요."
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
