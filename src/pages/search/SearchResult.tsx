import React, { useState } from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import SolidLine from './SolidLine';
import DatetimeSelector from './DatetimeSelector';
import FilterList from './FilterList';
import DevideLine from '../../components/common/DevideLine';
import StoreItem from './StoreItem';

import { SearchModalType } from './modal/enum/Enum';

function SearchResult() {
    const [modalStateArray, setModalStateArray] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleModalToggle = (modalType: SearchModalType) => {
        modalStateArray[modalType] = !modalStateArray[modalType];
        setModalStateArray([...modalStateArray]);
    };

    return (
        <section
            style={{
                width: 390,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
            }}
        >
            <Div>
                <div>
                    <TopNaviBarBack pageName="검색결과" prevPath="/search" />
                    <SolidLine />
                    <DatetimeSelector
                        onClick={() => {
                            handleModalToggle(SearchModalType.DatetimeSelector);
                        }}
                    />
                    <SolidLine />
                    <FilterList onClickFilter={handleModalToggle} />
                    <DevideLine />
                </div>
            </Div>
            <StoreCount>9,999개의 매장</StoreCount>
            <ResultDiv>
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지가게 소개 메세지가게 소개 메세지가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
                <StoreItem
                    name="가게1"
                    description="가게 소개 메세지"
                    subInfo="육류, 고기요리 · 영등포"
                    price="점심 저녁 동일가 1~4만원"
                />
            </ResultDiv>
        </section>
    );
}

export default SearchResult;

const Div = styled.div`
    width: 390px;
    //height: calc(100vh - 65px);
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StoreCount = styled.p`
    margin-left: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    color: darkgray;
`;

const ResultDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    //overflow-y: auto;
`;
