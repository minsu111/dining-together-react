import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../../assets/logo.svg';
import axiosRequest from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Banner01 from '../../assets/banner01.svg'
import Banner02 from '../../assets/banner02.svg'
import Banner03 from '../../assets/banner03.svg'

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
                    <img alt="" src={Banner01} />
                    <img alt="" src={Banner02} />
                    <img alt="" src={Banner03} />
                </Slider>
            </Banner>
            {Object.keys(storeList).map((key) => {
                return <RecommendList title={key} storeList={storeList} />;
            })}
        </>
    );
}

type StoreCardProps = {
    imageUrl: string;
    storeName: string;
    minCount: number;
    maxCount: number;
    foodCategory: string;
    storeUrl: string;
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
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{navigate(props.storeUrl)}}>
            <Image alt="" src={props.imageUrl}/>
            <h5>{props.storeName}</h5>
            <p>
                {props.minCount} ~ {props.maxCount}명 · {props.foodCategory}
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
        margin: 10px;
    `;
    const Container = styled.div`
        margin: 30px 0 0 20px;
        .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
            display: none;
          }
          .react-horizontal-scrolling-menu--scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
    `;

    const [duration, setDuration] = React.useState(500);

    const onWheel = (api: React.ContextType<typeof VisibilityContext>, ev: React.WheelEvent) => {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
        if (isTouchpad) {
        ev.stopPropagation();
        }
        if (ev.deltaY < 0) {
            api.scrollPrev(undefined, undefined, undefined, { duration });
        } else if (ev.deltaY > 0) {
            api.scrollNext(undefined, undefined, undefined, { duration });
            }
    }
    
    return (
        <Container>
            <Title>{props.title}</Title>

            <ScrollMenu onWheel={onWheel} >
                {props.storeList[props.title].map(
                    (storeInfo: Record<string, any>) => {
                        return (
                            <StoreCard
                                imageUrl={storeInfo.imageUrl}
                                storeName={storeInfo.storeName}
                                minCount={storeInfo.minPeople}
                                maxCount={storeInfo.maxPeople}
                                foodCategory={storeInfo.foodCategory}
                                storeUrl={`/store/${storeInfo.storeId}`}
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