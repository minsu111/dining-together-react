import React from 'react';
import styled from 'styled-components';
import FilterButtonInModal from './FilterButtonInModal';

import { FilterType } from './Enum';

const TotalFilter: React.FC<{ data: string }> = ({ data }) => {
    return (
        <Div>
            <FilterButtonInModal filterType={FilterType.Region} selectData="" />
            <FilterButtonInModal
                filterType={FilterType.FoodType}
                selectData="한식"
            />
            <FilterButtonInModal
                filterType={FilterType.PricePerPerson}
                selectData=""
            />
            <FilterButtonInModal
                filterType={FilterType.Atmosphere}
                selectData="7만원 ~ 40만원"
            />
            <FilterButtonInModal filterType={FilterType.Seat} selectData="홀" />
        </Div>
    );
};

export default TotalFilter;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    inset: 0;
`;
