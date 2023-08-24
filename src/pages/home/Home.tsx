import React from 'react';
import { styled } from 'styled-components';
import TopNaviBar from '../../components/common/TopNaviBar';
import GNBArea from '../../components/common/GNB';

function Home() {
    return <Section>
        <TopNaviBar pageName='회식어때'/>
        <GNBArea />
    </Section>;
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
