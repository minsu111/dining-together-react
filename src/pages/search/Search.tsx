import React from 'react';
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

function Search() {
    const navigate = useNavigate();

    return (
        <section>
            <DatetimeSelectorModal
                visitDate={new Date()}
                isOpen={false}
                onConfirm={() => {}}
            />

            <FilterModal title="필터" isOpen={false} onConfirm={() => {}}>
                <TotalFilter data="123" />
            </FilterModal>
            <FilterModal title="지역" isOpen={false} onConfirm={() => {}}>
                <SelectRegion data="123" />
            </FilterModal>
            <FilterModal title="음식 유형" isOpen={false} onConfirm={() => {}}>
                <SelectFoodType data="123" />
            </FilterModal>
            <FilterModal title="인당 가격" isOpen={false} onConfirm={() => {}}>
                <SelectPricePerPerson data="123" />
            </FilterModal>
            <FilterModal title="분위기" isOpen={false} onConfirm={() => {}}>
                <SelectAtmosphere data="123" />
            </FilterModal>
            <FilterModal title="좌석" isOpen={false} onConfirm={() => {}}>
                <SelectSeat data="123" />
            </FilterModal>

            <Div>
                <div>
                    <TopNaviBar pageName="검색하기" />
                    <SearchInput onClick={() => navigate('/search/keyword')} />
                    <SolidLine />
                    <DatetimeSelector />
                    <SolidLine />
                    <FilterList />
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
