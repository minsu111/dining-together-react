import React from 'react';
import { styled } from 'styled-components';
import GNBArea from '../../components/common/GNB';
import Logo from '../../assets/logo.svg';
import BigImageSample from '../../assets/ImageSampleB.svg'
import SmallImageSmaple from '../../assets/ImageSampleS.svg'

function Home() {
    return(
    <Section>
        <TopBar>
            <img alt="" src={Logo}/>
        </TopBar>
        <img alt="" src={BigImageSample}/>
        <RecommendList />
        <RecommendList />
        <RecommendList />
        <RecommendList />
        <GNBArea />
    </Section>
    ) 
}

type StoreCardProps={
    imgUrl: string;
    storeName: string;
    minCount: number; 
    maxCount: number;
    foodType: string;
}

const StoreCard: React.FC<StoreCardProps> = (props) => {
    const Image = styled.img`
        width: 124px;
        height: 124px;
        border-radius: 10px;
    `
    const Card = styled.div`
        width: 124px;
        height: 172px;

        h5{
            font-size: 14px;
        }

        p{
            font-size: 12px;
        }
    `
    return(
        <Card>
                <Image alt="" src={props.imgUrl}/>
                <h5>{props.storeName}</h5>
                <p>{props.minCount} ~ {props.maxCount}명 · {props.foodType}</p>
        </Card>
    )
}

const RecommendList = () =>{
    const List = styled.div`
        width: 650px;
        display: flex;
        justify-content: space-between;
    `
    const Title = styled.h3`
        font-size: 20px;
        font-weight: bold;
    `
    const Container = styled.div`
        margin: 30px 0 0 20px;
    `
    return (
        <Container>
            <Title>건대/성수/왕십리 회식 명소</Title>
            <List>
                <StoreCard imgUrl={SmallImageSmaple} storeName='더즌 오이스터' minCount={10} maxCount={40} foodType='일식'/>
                <StoreCard imgUrl={SmallImageSmaple} storeName='더즌 오이스터' minCount={10} maxCount={40} foodType='일식'/>
                <StoreCard imgUrl={SmallImageSmaple} storeName='더즌 오이스터' minCount={10} maxCount={40} foodType='일식'/>
                <StoreCard imgUrl={SmallImageSmaple} storeName='더즌 오이스터' minCount={10} maxCount={40} foodType='일식'/>
                <StoreCard imgUrl={SmallImageSmaple} storeName='더즌 오이스터' minCount={10} maxCount={40} foodType='일식'/>
            </List>
        </Container>
    )
}


export default Home;

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

const TopBar = styled.div`
    width: 390px;
    height: 48px;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
`;