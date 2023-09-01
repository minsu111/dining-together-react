import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TopNaviBar from '../../components/common/TopNaviBar';
import DevideLine from '../../components/common/DevideLine';
import axiosRequest from '../../api/api';
import { RootState } from '../../app/store';
import AddStoreBtn from '../../components/common/AddStoreBtn';
import HandleError from '../../api/Error';
import { OwnerData } from '../../@types/Store';
import StoreImg from '../../assets/storefront-outline.svg';
import Loading from '../../components/common/Loading';

function Mypage() {
    const [ownerData, setOwnerData] = useState<OwnerData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const goToPage = (path: string) => {
        navigate(`/${path}`);
    };

    const user = useSelector((state: RootState) => state.user);
    const token = localStorage.getItem('jwt_token');

    useEffect(() => {
        if (!token) {
            goToPage('login');
        } else {
            const getOwnerData = async () => {
                const result = await axiosRequest(
                    'GET',
                    '/stores/my',
                    {},
                    HandleError,
                );
                await setOwnerData(result);
            };
            getOwnerData();
        }
    }, []);

    return (
        <div>
            <TopNaviBar pageName="마이페이지" />
            <Container>
                {user.userType === '1' && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요 <span>{user.userName}</span> 님
                            </Title>
                        </TitleWrapper>
                        <Account>{user.userEmail}</Account>
                    </TitleSection>
                )}
                {user.userType === '2' && user.userType !== null && (
                    <TitleSection>
                        <TitleWrapper>
                            <Title>
                                안녕하세요, <span>{user.userName}</span> 님
                            </Title>
                            <OwnerBadge>사장님</OwnerBadge>
                        </TitleWrapper>
                        <Account>{user.userEmail}</Account>
                        <hr />
                        {ownerData && ownerData.storeId !== null && (
                            <StoreInfoSection>
                                <StoreInfoTitle>
                                    <img src={StoreImg} alt="가게아이콘" />
                                    <span>내 가게</span>
                                </StoreInfoTitle>
                                <StoreInfo>
                                    <ImgWrapper
                                        onClick={() => {
                                            goToPage(
                                                `store/${ownerData.storeId}`,
                                            );
                                        }}
                                    >
                                        <img
                                            src={`http://13.209.102.55/${ownerData.imageUrl}`}
                                            alt="가게이미지"
                                        />
                                    </ImgWrapper>
                                    <StoreInfoText>
                                        <ClickText
                                            onClick={() => {
                                                goToPage(
                                                    `store/${ownerData.storeId}`,
                                                );
                                            }}
                                        >
                                            <span>{ownerData.storeName}</span>
                                            {ownerData.address.roadAddress}
                                        </ClickText>
                                        <AddButton
                                            onClick={() =>
                                                goToPage('my/store/detail')
                                            }
                                        >
                                            단체석 추가하기
                                        </AddButton>
                                    </StoreInfoText>
                                </StoreInfo>
                            </StoreInfoSection>
                        )}
                        {ownerData === null && <AddStoreBtn />}
                    </TitleSection>
                )}
            </Container>
            <DevideLine />
            <Container>
                <InfoMenu onClick={() => goToPage('my/info')}>
                    <span>내 정보</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                <InfoMenu onClick={() => goToPage('reservationList')}>
                    <span>내 예약 내역</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                {isLoading && <Loading />}
            </Container>
        </div>
    );
}

export default Mypage;

const Container = styled.section`
    height: 46vh;
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
    margin-right: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
        font-weight: 700;
    }
`;

const OwnerBadge = styled.button`
    all: unset;
    width: 40px;
    height: 20px;
    background-color: #474747;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    padding: 5px 8px;
    white-space: nowrap;
    cursor: default;
`;

const AddButton = styled.button`
    all: unset;
    width: 100px;
    height: 20px;
    background-color: #ffb100;
    border-radius: 7px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    padding: 6px 8px;
    margin: 10px 0;
    white-space: nowrap;
    z-index: 2;
`;

const Account = styled.h3`
    font-size: 20px;
    margin-bottom: 50px;
`;

const StoreInfoSection = styled.section`
    height: 22vh;
`;

const StoreInfoTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0 10px 2px;
    display: flex;
    align-items: center;
    span {
        padding: 3px 0 0 6px;
    }
`;

const StoreInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;

    img {
        width: 110px;
        height: 110px;
        border-radius: 8px;
        background-size: cover;
        background-position: 50% 50%;
        background-size: cover;
        background-position: 50% 50%;
    }
`;

const ImgWrapper = styled.div``;

const ClickText = styled.div`
    display: flex;
    flex-direction: column;
`;

const StoreInfoText = styled.div`
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    display: flex;
    flex-direction: column;
    line-height: 20px;

    span {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 6px;
    }
`;

const InfoMenu = styled.button`
    width: 100%;
    margin: 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 18px;
    }
`;
