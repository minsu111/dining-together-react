import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TopNaviBar from '../../components/common/TopNaviBar';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';

function Mypage() {
    // const [isToken, setIsToken] = useState<boolean>(false);
    // const userId = localStorage.getItem('userId');
    const [data, setData] = useState({ name: '', email: '' });
    const userType: string | null = localStorage.getItem('userType');

    const navigate = useNavigate();
    const goToMy = (path: string) => {
        navigate(`/my/${path}`, { state: { data } });
    };
    const goLogin = () => {
        navigate(`/login`);
    };

    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (!token) {
            goLogin();
        }
        const getUserInfo = async () => {
            try {
                const result = await axiosRequest('GET', '/user/28', {});
                console.log(
                    '🚀 ~ file: Mypage.tsx:37 ~ getUserInfo ~ result:',
                    result,
                );
                const { name, email } = result;
                setData({ name, email });
            } catch (error: any) {
                alert('조회 실패');
            }
        };
        getUserInfo();
    }, []);

    return (
        <div>
            <Container>
                <TopNaviBar pageName="마이페이지" />
                {userType === '1' && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요 <span>{data.name}</span> 님
                            </Title>
                        </TitleWrapper>
                        <Account>{data.email}</Account>
                    </TitleSection>
                )}
                {userType === '2' && userType !== null && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요 <span>{data.name}</span> 님
                            </Title>
                            <OwnerBadge>사장님</OwnerBadge>
                        </TitleWrapper>
                        <Account>{data.email}</Account>
                        <hr />
                        <OwnerPageText>
                            가게 등록하고 <span>간편하게</span>
                            <br /> <span>단체 예약</span> 받으세요
                        </OwnerPageText>
                        <Button
                            text="가게 등록하기"
                            onClick={() => goToMy('store')}
                        />
                    </TitleSection>
                )}
            </Container>
            <DevideLine />
            <Container>
                <InfoMenu onClick={() => goToMy('info')}>
                    <span>내 정보</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                <InfoMenu onClick={() => goToMy('list')}>
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
    cursor: default;
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
    cursor: default;
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
