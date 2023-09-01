import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import SolidLine from './SolidLine';
import DatetimeSelector from './DatetimeSelector';
import FilterList from './FilterList';
import DevideLine from '../../components/common/DevideLine';
import StoreItem from './StoreItem';
import axiosRequest from '../../api/api';

// modal들
import DatetimeSelectorModal from './modal/DatetimeSelectorModal';
import TotalFilter from './modal/TotalFilter';
import SelectRegion from './modal/SelectRegion';
import SelectFoodType from './modal/SelectFoodType';
import SelectPricePerPerson from './modal/SelectPricePerPerson';
import SelectAtmosphere from './modal/SelectAtmosphere';
import SelectSeat from './modal/SelectSeat';

import { SearchModalType } from './modal/enum/Enum';
import { RootState } from '../../app/store';
import Button from '../../components/common/Button';

function SearchResult() {
    const [data, setData] = useState<Store[]>([]);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    let isLastPage = false;

    const filterState = useSelector((state: RootState) => {
        return state.filter;
    });

    useEffect(() => {
        filterSearch();
    }, []);

    // TODO: 임시 코드. 이후 수정 예정.
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

    const filterSearch = async () => {
        console.log('isLastPage: ', isLastPage);
        if (isLastPage) return;

        // api 호출
        try {
            const url = `/stores/filter?selectedDate=${
                filterState.expectedDate
            }&location=${filterState.region}&foodCategory=${
                filterState.foodType
            }&minCost=${filterState.priceMin * 10000}&maxCost=${
                filterState.priceMax * 10000
            }&mood=${filterState.atmosphere}&room=${filterState.seat}&page=${
                page + 1
            }`;
            console.log('filterSearch 호출. url: ', url);

            const result = await axiosRequest('GET', url, {});

            isLastPage = result.isLastPage;
            setPage((prev) => prev + 1);
            setTimeout(() => {
                setData(data.concat(result.stores));
                setTotalCount(result.totalCount);
            }, 300);

            // console.log('JSON: ', JSON.stringify(result));

            // console.log('result[0]: ', result[0].storeId);

            // console.log('data.length: ', data.length);

            // console.log('result:', result);
        } catch (error: any) {
            const errorStatus = error.status;
            switch (errorStatus) {
                default:
                    alert('오류가 발생했습니다. 다시 한 번 시도해주세요.');
                    break;
            }
            console.log('error:', error);
        }
    };

    return (
        <Section>
            <DatetimeSelectorModal
                isOpen={modalStateArray[SearchModalType.DatetimeSelector]}
                modalType={SearchModalType.DatetimeSelector}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            />

            <TotalFilter
                isOpen={modalStateArray[SearchModalType.Total]}
                onToggleFilterDisplay={handleModalToggle}
            />
            <SelectRegion
                isOpen={modalStateArray[SearchModalType.Region]}
                onClose={handleModalToggle}
            />
            <SelectFoodType
                isOpen={modalStateArray[SearchModalType.FoodType]}
                onClose={handleModalToggle}
            />
            <SelectPricePerPerson
                isOpen={modalStateArray[SearchModalType.PricePerPerson]}
                onClose={handleModalToggle}
            />
            <SelectAtmosphere
                isOpen={modalStateArray[SearchModalType.Atmosphere]}
                onClose={handleModalToggle}
            />
            <SelectSeat
                isOpen={modalStateArray[SearchModalType.Seat]}
                onClose={handleModalToggle}
            />

            <Div2>
                <HeaderDiv>
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
                </HeaderDiv>
                <StoreCount>{totalCount}개의 매장</StoreCount>

                <ResultDiv id="resultDiv">
                    <InfiniteScroll
                        dataLength={data.length}
                        next={filterSearch}
                        hasMore
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        loader={<></>}
                        scrollableTarget="resultDiv"
                    >
                        {data.map((store) => (
                            <StoreItem
                                storeId={store.storeId}
                                imgUrl={store.imageUrl}
                                name={store.storeName}
                                description={store.description}
                                subInfo={`${store.foodCategory} · ${store.location}`}
                                price={store.cost}
                            />
                        ))}
                    </InfiniteScroll>
                </ResultDiv>
            </Div2>
            <FooterDiv>
                <SolidLine />
                <div style={{ margin: '20px auto' }}>
                    <Button
                        type="submit"
                        text="검색"
                        onClick={() => {
                            setPage(0);
                            setData([]);
                            setTotalCount(0);
                            isLastPage = false;

                            filterSearch();
                        }}
                    />
                </div>
            </FooterDiv>
            {/* <footer>
                <div
                    style={{
                        width: '100%',
                        margin: '20px auto',
                        position: 'fixed',
                        bottom: '80px',
                        backgroundColor: 'yellow',
                    }}
                >
                    <button
                        style={{ width: '100%' }}
                        type="button"
                        onClick={() => filterSearch()}
                    >
                        검색 테스트용 버튼 [
                        {`/stores/filter?selectedDate=${
                            filterState.expectedDate
                        }&location=${filterState.region}&foodCategory=${
                            filterState.foodType
                        }&minCost=${filterState.priceMin * 10000}&maxCost=${
                            filterState.priceMax * 10000
                        }&mood=${filterState.atmosphere}&room=${
                            filterState.seat
                        }`}
                        ]
                    </button>
                </div>
            </footer> */}
        </Section>
    );
}

export default SearchResult;

const Section = styled.section`
    height: 100vh;
`;

const Div2 = styled.div`
    height: calc(100% - 93px); // 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const HeaderDiv = styled.div`
    width: 390px;
    //height: calc(100vh - 65px);
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StoreCount = styled.p`
    margin-left: 10px;
    // margin-bottom: 20px;
    font-size: 14px;
    color: darkgray;
`;

const ResultDiv = styled.div`
    // width: 100%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // gap: 20px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

type Address = {
    postalCode: string;
    roadAddress: string;
    detailAddress: string;
};

type OperatingHours = {
    openingHour: string;
    openingMinute: string;
    closingHour: string;
    closingMinute: string;
};

type Store = {
    storeId: number;
    userId: number;
    storeName: string;
    storeContact: string;
    address: Address | string; // Address 혹은 string으로 처리
    description: string;
    operatingHours: OperatingHours | string; // OperatingHours 혹은 string으로 처리
    closedDays: string;
    foodCategory: string;
    maxNum: number;
    cost: number;
    isParking: number;
    createdAt: string;
    modifiedAt: string;
    averageRating: number;
    reviewCount: number;
    isDeleted: number;
    location: string;
    keyword: string;
    mood: string;
    isRoom: number;
    imageUrl: string;
};

type SearchData = {
    stores: Store[];
    totalCount: number;
    isLastPage: boolean;
};
