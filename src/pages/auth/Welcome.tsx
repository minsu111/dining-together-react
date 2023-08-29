import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Button from '../../components/common/Button';
import WelcomCustomerImg from '../../assets/party.svg';
import WelcomOwnerImg from '../../assets/store.svg';

const Welcome = () => {
    const userType = localStorage.getItem('userType');

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
        localStorage.removeItem('userType');
    };
    const goToAddStore = () => {
        navigate('/my/store');
        localStorage.removeItem('userType');
    };

    return (
        <div>
            {userType === '1' && (
                <Section>
                    <Title>
                        회원가입 완료!
                        <br />
                        환영합니다
                    </Title>
                    <MiddleTitle>
                        회식장소를 둘러보고 <br />
                        예약해보세요
                    </MiddleTitle>
                    <Wrapper>
                        <img
                            src={WelcomCustomerImg}
                            alt="가입완료_일반회원"
                            style={{ width: '50%', marginBottom: '80px' }}
                        />
                        <Button
                            type="button"
                            text="회식장소 보러 가기"
                            onClick={goToHome}
                        />
                    </Wrapper>
                </Section>
            )}
            {userType === '2' && (
                <Section>
                    <Title>
                        <br />
                        회원가입 완료!
                    </Title>
                    <MiddleTitle>
                        안녕하세요 사장님, <br />
                        회식장소를 등록해보세요.
                    </MiddleTitle>
                    <Wrapper>
                        <img
                            src={WelcomOwnerImg}
                            alt="가입완료_사장님"
                            style={{ width: '50%', marginBottom: '80px' }}
                        />
                        <Button
                            // type="button"
                            text="회식장소 등록하러 가기"
                            onClick={goToAddStore}
                        />
                    </Wrapper>
                </Section>
            )}
        </div>
    );
};
export default Welcome;

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
    font-weight: 600;
    padding: 50px 20px 10px 20px;
`;

const MiddleTitle = styled.span`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    padding: 0 20px;
    margin-bottom: 70px;
`;

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImsiButton = styled.button`
    all: unset;
    font-size: 14px;
    color: #474747;
    padding: 12px 22px;
    text-align: right;
    text-decoration: underline;
    text-decoration-color: #474747;

    cursor: pointer;
`;
