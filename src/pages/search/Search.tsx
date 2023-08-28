import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopNaviBar from '../../components/common/TopNaviBar';
import SearchInput from './SearchInput';
import SolidLine from './SolidLine';
import DatetimeSelector from './DatetimeSelector';
import FilterList from './FilterList';
import DevideLine from '../../components/common/DevideLine';
import Button from '../../components/common/Button';
import GNBArea from '../../components/common/GNB';

// modal들
import DatetimeSelectorModal from './modal/DatetimeSelectorModal';
import FilterModal from './modal/template/FilterModal';
import TotalFilter from './modal/TotalFilter';
import SelectRegion from './modal/SelectRegion';
import SelectFoodType from './modal/SelectFoodType';
import SelectPricePerPerson from './modal/SelectPricePerPerson';
import SelectAtmosphere from './modal/SelectAtmosphere';
import SelectSeat from './modal/SelectSeat';

import { FoodType, SearchModalType } from './modal/enum/Enum';

function Search() {
    const navigate = useNavigate();

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
        <section>
            <DatetimeSelectorModal
                visitDate={new Date()}
                isOpen={modalStateArray[SearchModalType.DatetimeSelector]}
                modalType={SearchModalType.DatetimeSelector}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            />

            <FilterModal
                title="필터"
                isOpen={modalStateArray[SearchModalType.Total]}
                modalType={SearchModalType.Total}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <TotalFilter data="123" />
            </FilterModal>
            <FilterModal
                title="지역"
                isOpen={modalStateArray[SearchModalType.Region]}
                modalType={SearchModalType.Region}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <SelectRegion data="123" />
            </FilterModal>
            <FilterModal
                title="음식 유형"
                isOpen={modalStateArray[SearchModalType.FoodType]}
                modalType={SearchModalType.FoodType}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <SelectFoodType />
            </FilterModal>
            <FilterModal
                title="인당 가격"
                isOpen={modalStateArray[SearchModalType.PricePerPerson]}
                modalType={SearchModalType.PricePerPerson}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <SelectPricePerPerson selectMin={10} selectMax={30} />
            </FilterModal>
            <FilterModal
                title="분위기"
                isOpen={modalStateArray[SearchModalType.Atmosphere]}
                modalType={SearchModalType.Atmosphere}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <SelectAtmosphere data="123" />
            </FilterModal>
            <FilterModal
                title="좌석"
                isOpen={modalStateArray[SearchModalType.Seat]}
                modalType={SearchModalType.Seat}
                onConfirm={() => {}}
                onClose={handleModalToggle}
            >
                <SelectSeat data="123" />
            </FilterModal>

            <Div>
                <div>
                    <TopNaviBar pageName="검색하기" />
                    <SearchInput onClick={() => navigate('/search/keyword')} />
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
                <div style={{ margin: '20px auto' }}>
                    <Button
                        text="검색"
                        onClick={() => navigate('/search/list')}
                    />
                </div>
            </Div>

            <footer>
                <GNBArea />
            </footer>
        </section>
    );
}

export default Search;

const Div = styled.div`
    width: 390px;
    height: calc(100vh - 65px);
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
