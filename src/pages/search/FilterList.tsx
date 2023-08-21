import React from 'react';
import styled from 'styled-components';
import TotalFilterButton from './TotalFilterButton';
import FilterButton from './FilterButton';


function FilterList() {
    return (
        <Div>
            <TotalFilterButton/>
            <VerticalDivider/>
            <div style={{overflow:"hidden", display:"flex"}}>
                <FilterButton category='지역'/>
                <FilterButton category='음식 유형'/>
                <FilterButton category='인당 가격'/>
                <FilterButton category='분위기'/>
                <FilterButton category='좌석'/>
            </div>
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
    margin: 10px;
    background-color: #ececec;
`;
