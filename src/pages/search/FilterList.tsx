import React from 'react';
import styled from 'styled-components';
import TotalFilterButton from './TotalFilterButton';
import FilterButton from './FilterButton';

function FilterList() {
    return (
        <Div>
            <TotalFilterButton />
            <VerticalDivider />
            <FilterListDiv>
                <FilterButton category="지역" />
                <FilterButton category="음식 유형" />
                <FilterButton category="인당 가격" />
                <FilterButton category="분위기" />
                <FilterButton category="좌석" />
            </FilterListDiv>
        </Div>
    );
}

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
