import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import LandscapeImg from '../../assets/landscape_photographer.svg';
import Button from '../../components/common/Button';
import CheckBox from '../../components/Auth/CheckBox';
import SignUpForm from '../../components/Auth/SignUpForm';
import AgreementCheckBox from '../../components/Auth/AgreementCheckBox';

const SignUp = () => {
    const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);

    const handleNextClick = () => {
        setShowSignUpForm(true);
    };

    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };
    return (
        <div>
            {!showSignUpForm && (
                <Section>
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
                        <CheckBox />
                        <Button text="다음" onClick={handleNextClick} />
                        {/* <ExtraInfo /> */}
                    </Wrapper>
                </Section>
            )}

            {showSignUpForm && (
                <Section>
                    <SignUpForm />
                    <AgreementCheckBox />
                    <Wrapper>
                        <Button
                            text="시작하기"
                            // type="submit"
                            onClick={goToWelcome}
                        />
                    </Wrapper>
                </Section>
            )}
        </div>
    );
};

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

const Title = styled.h1`
    font-size: 34px;
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