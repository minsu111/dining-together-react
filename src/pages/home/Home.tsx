import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosRequest from '../../api/api';
import Logo from '../../assets/logo.svg';
import Banner01 from '../../assets/banner01.svg'
import Banner02 from '../../assets/banner02.svg'
import Banner03 from '../../assets/banner03.svg'
import RecommendList from './RecommendList';

function Home() {
    const [storeList, setStoreList] = useState<Record<string, any>>({});
    useEffect(() => {
        const fetch = async () => {
            try {
                setStoreList(await axiosRequest('GET', '/home'));
            } catch (error) {
                console.log('에러');
            }
        };
        fetch();
    }, []);

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
            <HomeContent>
                {Object.keys(storeList).map((key) => {
                    return <RecommendList title={key} storeList={storeList} />;
                })}
            </HomeContent>
        </>
    );
}

export default Home;

const TopBar = styled.div`
    position: sticky;
    top: 0;
    width: 390px;
    height: 50px;
    background-color: #fff;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;
const Banner = styled.div`
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
const HomeContent = styled.div`
    margin-bottom: 80px;
`