import React from 'react';
import { styled } from 'styled-components';

function SignUp() {
    return <Section>회원가입</Section>;
}

export default SignUp;

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
