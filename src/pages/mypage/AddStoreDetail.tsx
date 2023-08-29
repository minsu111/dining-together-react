import React from 'react';
import { styled } from 'styled-components';
import TableInfo from '../../components/AddStore/TableInfo';
import TopNaviBar from '../../components/common/TopNaviBar';

function AddStoreDetail() {
    return (
        <section>
            <Header>
                <TopNaviBar pageName='자리 등록' />
            </Header>
            <Inner>
                <TableInfo placeName='' minPeople='' maxPeople=''  handleChangeInfo={() => {}} />
            </Inner>
        </section>
    );
}

export default AddStoreDetail;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
    padding-left: 10px;
`

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 100%;
    position: relative;
`;

const ConSC = styled.div`
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
        margin-bottom: 50px;
    }

    span {
        font-size: 24px;
        font-weight: 600;
    }
`;

const ButtonSC = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;
`;