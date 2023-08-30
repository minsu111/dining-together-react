/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type FilterState = {
    expectedDate: string;
    region: string[];
    foodType: string[];
    priceMin: number;
    priceMax: number;
    atmosphere: string[];
    seat: string[];
};

const initialState: FilterState = {
    expectedDate: '',
    region: [],
    foodType: [],
    priceMin: 0,
    priceMax: 40,
    atmosphere: [],
    seat: [],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setExpectedDate(state, action) {
            state.expectedDate = action.payload;
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
            console.log(action.payload);
            state.seat = action.payload;
        },
    },
});

export const {
    setExpectedDate: setVisitDate,
    setRegion,
    setFoodType,
    setPriceMin,
    setPriceMax,
    setAtmosphere,
    setSeat,
} = filterSlice.actions;

export default filterSlice;
