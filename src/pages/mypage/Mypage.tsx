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
import { StoreData } from '../../@types/Store';

type ImgProps = {
    imageId: number;
    imageUrl: string;
    storeId: number;
};

function Mypage() {
    const [ownerData, setOwnerData] = useState<StoreData | null>(null);
    const [storeImg, setStoreImg] = useState<ImgProps[]>([]);

    const navigate = useNavigate();
    const goToMy = (path: string) => {
        navigate(`/${path}`);
    };
    const goLogin = () => {
        navigate(`/login`);
    };
    const user = useSelector((state: RootState) => state.user);
    const token = localStorage.getItem('jwt_token');

    useEffect(() => {
        if (!token) {
            goLogin();
        } else {
            const getOwnerData = async () => {
                const result = await axiosRequest(
                    'GET',
                    '/stores/my',
                    {},
                    HandleError,
                );
                setOwnerData(result);
            };
            getOwnerData();
        }

        const getStoreImage = async () => {
            if (ownerData && ownerData.storeId !== null) {
                const result = await axiosRequest(
                    'GET',
                    `stores/${ownerData.storeId}/images`,
                    {},
                    HandleError,
                );
                setStoreImg(result);
                console.log(storeImg);
            }
        };
        if (ownerData && ownerData.storeId !== null) {
            getStoreImage();
        }
    }, []);

    // if (storeImg && storeImg.length > 0) {
    //     const firstImageUrl = storeImg[0]?.imageUrl;
    // }

    const firstImageUrl =
        storeImg && storeImg.length > 0
            ? storeImg[0]?.imageUrl
            : '기본 이미지 URL';

    return (
        <div>
            <Container>
                <TopNaviBar pageName="마이페이지" />
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
                                안녕하세요 <span>{user.userName}</span> 님
                            </Title>
                            <OwnerBadge>사장님</OwnerBadge>
                        </TitleWrapper>
                        <Account>{user.userEmail}</Account>
                        <hr />
                        {ownerData === null && <AddStoreBtn />}
                        {ownerData && ownerData.storeId !== null && (
                            <StoreInfo>
                                <p>내 가게</p>
                                <span>{ownerData.storeName}</span>
                                <span>{ownerData.address.roadAddress}</span>
                                <img src={firstImageUrl} alt="가게이미지" />
                            </StoreInfo>
                        )}
                    </TitleSection>
                )}
            </Container>
            <DevideLine />
            <Container>
                <InfoMenu onClick={() => goToMy('my/info')}>
                    <span>내 정보</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </InfoMenu>
                <InfoMenu onClick={() => goToMy('reservationlist')}>
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

const StoreInfo = styled.div``;

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
