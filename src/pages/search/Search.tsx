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

// modal들
import DatetimeSelectorModal from './modal/DatetimeSelectorModal';
import TotalFilter from './modal/TotalFilter';
import SelectRegion from './modal/SelectRegion';
import SelectFoodType from './modal/SelectFoodType';
import SelectPricePerPerson from './modal/SelectPricePerPerson';
import SelectAtmosphere from './modal/SelectAtmosphere';
import SelectSeat from './modal/SelectSeat';

import { SearchModalType } from './modal/enum/Enum';

function Search() {
    const navigate = useNavigate();

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

    return (
        <section>
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
