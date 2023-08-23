import React from 'react';
import styled from 'styled-components';
import FilterButtonInModal from './FilterButtonInModal';

import { FilterType } from './Enum';

const TotalFilter: React.FC<{ data: string }> = ({ data }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                inset: 0,
            }}
        >
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
        </div>
    );
};

export default TotalFilter;
