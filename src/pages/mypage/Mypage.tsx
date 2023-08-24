import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TopNaviBar from '../../components/common/TopNaviBar';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';

function Mypage() {
    const navigate = useNavigate();
    const goToMyInfo = () => {
        navigate('/my/info');
    };

    return (
        <div>
            <Container>
                <TopNaviBar pageName="마이페이지" />
                <TitleSection>
                    <TitleWrapper>
                        <Title>
                            안녕하세요 <span>엘리스</span> 님
                        </Title>
                        <OwnerBadge>사장님</OwnerBadge>
                    </TitleWrapper>
                    <Account>elice111@gmail.com</Account>
                    <hr />
                    <OwnerPageText>
                        가게 등록하고 <span>간편하게</span>
                        <br /> <span>단체 예약</span> 받으세요
                    </OwnerPageText>
                    <Button text="가게 등록하기" onClick={() => {}} />
                </TitleSection>
            </Container>
            <DevideLine />
            <Container>
                <InfoMenu onClick={goToMyInfo}>
                    <span>내 정보</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                <InfoMenu>
                    <span>내 예약 내역</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
            </Container>
        </div>
    );
}

export default Mypage;

const Container = styled.section`
    margin: 0 20px;
`;

const TitleSection = styled.section`
    margin: 30px 0;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    line-height: 45px;
    padding: 10px 0;
    margin-right: 12px;

    & > span {
        font-weight: 700;
    }
`;

const OwnerBadge = styled.div`
    all: unset;
    width: 40px;
    height: 20px;
    background-color: #ffb100;
    border-radius: 7px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    padding: 6px 8px;
`;

const Account = styled.h3`
    margin-bottom: 50px;
`;

const OwnerPageText = styled.h2`
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0;

    & > span {
        font-weight: 600;
    }
`;

const InfoMenu = styled.button`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-size: 18px;
    }
`;
