import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import FilterButtonInModal from './FilterButtonInModal';

import { RootState } from '../../../app/store';
import {
    setRegion,
    setFoodType,
    setPriceMin,
    setPriceMax,
    setAtmosphere,
    setSeat,
} from '../store/FilterSlice';
import { FilterType, SearchModalType } from './enum/Enum';
import { MAX_PRICE, MIN_PRICE } from './SelectPricePerPerson';

/**
 * 전체 필터를 확인하거나 이동할 수 있는 Modal
 */
function TotalFilter(props: {
    isOpen: boolean;
    onToggleFilterDisplay: (modalType: SearchModalType) => void;
}) {
    const dispatch = useDispatch();
    const filterState = useSelector((state: RootState) => {
        return state.filter;
    });

    const [region, setRegionData] = useState<string[]>([]);
    const [foodType, setFoodTypeData] = useState<string[]>([]);
    const [priceRange, setPriceRangeData] = useState<string[]>([]);
    const [atmosphere, setAtmosphereData] = useState<string[]>([]);
    const [seat, setSeatData] = useState<string[]>([]);

    useEffect(() => {
        setRegionData(filterState.region);
    }, [filterState.region]);

    useEffect(() => {
        setFoodTypeData(filterState.foodType);
    }, [filterState.foodType]);

    useEffect(() => {
        if (
            filterState.priceMin === MIN_PRICE &&
            filterState.priceMax === MAX_PRICE
        ) {
            setPriceRangeData([]);
        } else {
            const priceMin =
                filterState.priceMin === 0
                    ? '0원'
                    : `${filterState.priceMin}만원`;
            setPriceRangeData([`${priceMin} ~ ${filterState.priceMax}만원`]);
        }
    }, [filterState.priceMin, filterState.priceMax]);

    useEffect(() => {
        setAtmosphereData(filterState.atmosphere);
    }, [filterState.atmosphere]);

    useEffect(() => {
        setSeatData(filterState.seat);
    }, [filterState.seat]);

    const handleReset = () => {
        console.log('초기화 버튼 클릭');

        setRegionData([]);
        setFoodTypeData([]);
        setPriceRangeData([]);
        setAtmosphereData([]);
        setSeatData([]);
    };

    const handleClose = () => {
        props.onToggleFilterDisplay(SearchModalType.Total);
    };

    const handleConfirm = () => {
        dispatch(setRegion([]));
        dispatch(setFoodType([]));
        dispatch(setPriceMin(MIN_PRICE));
        dispatch(setPriceMax(MAX_PRICE));
        dispatch(setAtmosphere([]));
        dispatch(setSeat([]));

        handleClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 500,
                },
                content: {
                    width: '390px',
                    height: '100%',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    inset: 0,
                    margin: '0 auto',
                },
            }}
        >
            <FilterHeader onClickReset={handleReset} title="필터" />
            <ContentDiv>
                <Div>
                    <FilterButtonInModal
                        filterType={FilterType.Region}
                        selectData={region}
                        onToggleFilterDisplay={props.onToggleFilterDisplay}
                    />
                    <FilterButtonInModal
                        filterType={FilterType.FoodType}
                        selectData={foodType}
                        onToggleFilterDisplay={props.onToggleFilterDisplay}
                    />
                    <FilterButtonInModal
                        filterType={FilterType.PricePerPerson}
                        selectData={priceRange}
                        onToggleFilterDisplay={props.onToggleFilterDisplay}
                    />
                    <FilterButtonInModal
                        filterType={FilterType.Atmosphere}
                        selectData={atmosphere}
                        onToggleFilterDisplay={props.onToggleFilterDisplay}
                    />
                    <FilterButtonInModal
                        filterType={FilterType.Seat}
                        selectData={seat}
                        onToggleFilterDisplay={props.onToggleFilterDisplay}
                    />
                </Div>
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
    );
}

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
