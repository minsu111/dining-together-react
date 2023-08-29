import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GNBArea from '../../components/common/GNB';
import Logo from '../../assets/logo.svg';
import BigImageSample from '../../assets/ImageSampleB.svg';
import SmallImageSmaple from '../../assets/ImageSampleS.svg';
import axiosRequest from '../../api/api';

function Home() {
    const [storeList, setStoreList] = useState<Record<string, any>>({});
    useEffect(() => {
        const fetch = async () => {
            try {
                setStoreList(await axiosRequest('GET', '/home'));
            } catch (error) {
                // 여기에 에러 처리
                console.log('에러');
            }
        };
        fetch();
    }, []);

    // Selection 제거
    return (
        <>
            <TopBar>
                <img alt="" src={Logo} />
            </TopBar>
            <Banner>
                <Slider className='slider' autoplay speed={1000} infinite pauseOnHover>
                    <img alt="" src={BigImageSample} />
                    <img alt="" src={BigImageSample} />
                    <img alt="" src={BigImageSample} />
                </Slider>
            </Banner>
            {Object.keys(storeList).map((value) => {
                return <RecommendList title={value} storeList={storeList} />;
            })}
        </>
    );
}

type StoreCardProps = {
    imgUrl: string;
    storeName: string;
    minCount: number;
    maxCount: number;
    foodType: string;
};

const StoreCard = (props: StoreCardProps) => {
    const Image = styled.img`
        width: 124px;
        height: 124px;
        border-radius: 10px;
    `;
    const Card = styled.div`
        width: 124px;
        height: 172px;
        margin-left: 10px;
        h5 {
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
    `;
    return (
        <Card>
            <Image alt="" src={props.imgUrl} />
            <h5>{props.storeName}</h5>
            <p>
                {props.minCount} ~ {props.maxCount}명 · {props.foodType}
            </p>
        </Card>
    );
};

type RecommendListProps = {
    title: string;
    storeList: Record<string, any>;
};

const RecommendList = (props: RecommendListProps) => {
    const Title = styled.h3`
        font-size: 20px;
        font-weight: bold;
    `;
    const Container = styled.div`
        margin: 30px 0 0 20px;
    `;

    return (
        <Container>
            <Title>{props.title}</Title>

            <ScrollMenu>
                {props.storeList[props.title].map(
                    (value: Record<string, any>) => {
                        return (
                            <StoreCard
                                imgUrl={SmallImageSmaple}
                                storeName={value.storeId}
                                minCount={10}
                                maxCount={40}
                                foodType={value.foodType}
                            />
                        );
                    },
                )}
            </ScrollMenu>
        </Container>
    );
};

export default Home;

// TopBar 포지션 및 위치 조정
const TopBar = styled.div`
    position: fixed;
    top: 0;
    width: 390px;
    height: 50px;
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const Banner = styled.div`
    margin-top: 50px;
    .slider .slick-prev{
        left: 0;
        z-index: 100;
        width: 40px;
        height: 40px;
    }

    .slider .slick-prev:before{
        font-size: 40px;
    }

    .slider .slick-next{
        right: 0px;
        z-index: 100;
        width: 40px;
        height: 40px;
    }

    .slider .slick-next:before{
        font-size: 40px;
    }
`