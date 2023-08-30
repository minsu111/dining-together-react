import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
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

function SearchResult() {
    const [data, setData] = useState<Store[]>([]);

    const dispatch = useDispatch();
    const filterState = useSelector((state: RootState) => {
        return state.filter;
    });

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
        // api 호출
        try {
            const result = await axiosRequest(
                'GET',
                `/stores/filter?location=${filterState.region}&foodCategory=${filterState.foodType}&mood=${filterState.atmosphere}&room=${filterState.seat}`,
                {},
            );

            setData(result);

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
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
            }}
        >
            <DatetimeSelectorModal
                isOpen={modalStateArray[SearchModalType.DatetimeSelector]}
                modalType={SearchModalType.DatetimeSelector}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            />

            <TotalFilter
                isOpen={modalStateArray[SearchModalType.Total]}
                onClose={handleModalToggle}
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
            <StoreCount>{data.length}개의 매장</StoreCount>
            <ResultDiv>
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
                {/* <StoreItem
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
                /> */}
            </ResultDiv>
            <footer>
                <div
                    style={{
                        margin: '20px auto',
                        position: 'fixed',
                        bottom: '20px',
                        backgroundColor: 'yellow',
                    }}
                >
                    <button type="button" onClick={() => filterSearch()}>
                        검색 테스트용 버튼 [
                        {`/stores/filter?location=${filterState.region}&foodCategory=${filterState.foodType}&mood=${filterState.atmosphere}&room=${filterState.seat}`}
                        ]
                    </button>
                </div>
            </footer>
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
    overflow-y: auto;
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
