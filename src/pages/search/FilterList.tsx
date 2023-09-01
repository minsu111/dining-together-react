import React from 'react';
import styled from 'styled-components';
import TotalFilterButton from './TotalFilterButton';
import FilterButton from './FilterButton';

import { SearchModalType } from './modal/enum/Enum';

type FilterListProps = {
    onClickFilter: (modalType: SearchModalType) => void;
};

const FilterList: React.FC<FilterListProps> = (props) => {
    return (
        <Div>
            <TotalFilterButton onClick={props.onClickFilter} />
            <VerticalDivider />
            <FilterListDiv>
                <FilterButton
                    category="지역"
                    modalType={SearchModalType.Region}
                    onClick={props.onClickFilter}
                />
                <FilterButton
                    category="음식 유형"
                    modalType={SearchModalType.FoodType}
                    onClick={props.onClickFilter}
                />
                <FilterButton
                    category="인당 가격"
                    modalType={SearchModalType.PricePerPerson}
                    onClick={props.onClickFilter}
                />
                <FilterButton
                    category="분위기"
                    modalType={SearchModalType.Atmosphere}
                    onClick={props.onClickFilter}
                />
                <FilterButton
                    category="단체석"
                    modalType={SearchModalType.Seat}
                    onClick={props.onClickFilter}
                />
            </FilterListDiv>
        </Div>
    );
};

export default FilterList;

const Div = styled.div`
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
`;

const VerticalDivider = styled.span`
    width: 1px;
    height: 40px;
    display: block;
    margin: 10px 6px;
    background-color: #ececec;
`;

const FilterListDiv = styled.div`
    display: flex;
    gap: 5px;
    //overflow: hidden;
`;
