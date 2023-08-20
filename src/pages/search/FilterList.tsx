import React from 'react';
import styled from 'styled-components';
import TotalFilterButton from './TotalFilterButton';
import FilterButton from './FilterButton';


function FilterList() {
    return (
        <Div>
            <TotalFilterButton></TotalFilterButton>
            <VerticalDivider></VerticalDivider>
            <FilterButton category='지역'></FilterButton>
            <FilterButton category='음식 유형'></FilterButton>
            <FilterButton category='인당 가격'></FilterButton>
            <FilterButton category='분위기'></FilterButton>
            <FilterButton category='좌석'></FilterButton>
        </Div>
    );
}

export default FilterList;

const Div = styled.div`
    display: flex;
    alignItems: center;
    flex-wrap: wrap;
`;

const VerticalDivider = styled.span`
    width: 1px;
    height: 40px;
    display: block;
    margin: 10px;
    background-color: #ececec;
`;
