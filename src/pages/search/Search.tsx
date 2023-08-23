import React from 'react';
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

function Search() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <section>
            <DatetimeSelectorModal visitDate={new Date()} visitorCount={10} />

            <FilterModal title="필터" isOpen onConfirm={() => {}}>
                <TotalFilter data="123" />
            </FilterModal>

            <Div>
                <div>
                    <TopNaviBar pageName="검색하기" />
                    <SearchInput onInputChange={handleInputChange} />
                    <SolidLine />
                    <DatetimeSelector />
                    <SolidLine />
                    <FilterList />
                    <DevideLine />
                </div>
                <div style={{ margin: '20px auto' }}>
                    <Button text="검색" onClick={() => {}} />
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
