/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RegionType } from '../modal/enum/Enum';

type FilterState = {
    visitDate: Date;
    region: Array<RegionType>;
    foodType: string;
    priceMin: number;
    priceMax: number;
    atmosphere: string;
    seat: string;
};

const initialState: FilterState = {
    visitDate: new Date(),
    region: [],
    foodType: '',
    priceMin: 0,
    priceMax: 0,
    atmosphere: '',
    seat: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setVisitDate(state, action) {
            state.visitDate = action.payload;
            console.log(`setVisitDate ${state.visitDate}`);
        },
        setRegion(state, action) {
            state.region = action.payload;
        },
        setFoodType(state, action) {
            state.foodType = action.payload;
        },
        setPriceMin(state, action) {
            state.priceMin = action.payload;
        },
        setPriceMax(state, action) {
            state.priceMax = action.payload;
        },
        setAtmosphere(state, action) {
            state.atmosphere = action.payload;
        },
        setSeat(state, action) {
            state.seat = action.payload;
        },
    },
});

export const {
    setVisitDate,
    setRegion,
    setFoodType,
    setPriceMin,
    setPriceMax,
    setAtmosphere,
    setSeat,
} = filterSlice.actions;

export default filterSlice;
