import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import WelcomCustomerImg from '../../assets/party.svg';
import WelcomOwnerImg from '../../assets/store.svg';

const Welcome = () => {
    const userType = localStorage.getItem('userType');

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
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
                            style={{ width: '50%', marginBottom: '60px' }}
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
                            style={{ width: '50%', marginBottom: '60px' }}
                        />
                        <Button
                            // type="button"
                            text="회식장소 등록하러 가기"
                            onClick={goToAddStore}
                        />
                        <HomeButton onClick={goToHome}>
                            <FontAwesomeIcon className="icon" icon={faHouse} />
                            홈으로 가기
                        </HomeButton>
                    </Wrapper>
                </Section>
            )}
        </div>
    );
};
export default Welcome;

const Section = styled.section`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 34px;
    line-height: 45px;
    font-weight: 600;
    padding: 50px 20px 10px 20px;
    margin-top: 20px;
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

const HomeButton = styled.button`
    font-size: 14px;
    color: #474747;
    padding: 14px 22px;

    text-decoration: underline;
    text-decoration-color: #474747;

    cursor: pointer;

    .icon {
        padding: 0 4px;
        color: #585858;
    }
`;
