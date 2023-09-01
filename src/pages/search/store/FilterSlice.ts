/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type FilterState = {
    expectedDate: string; // yy-mm-dd
    region: string[];
    foodType: string[];
    priceMin: number;
    priceMax: number;
    atmosphere: string[];
    seat: string[];
    resultStores: StoreType[];
    resultTotalCount: number;
    resultPage: number;
    resultIsLastPage: boolean;
    searchKeyword: string;
};

const initialState: FilterState = {
    expectedDate: '',
    region: [],
    foodType: [],
    priceMin: 0,
    priceMax: 40,
    atmosphere: [],
    seat: [],
    resultStores: [],
    resultTotalCount: 0,
    resultPage: 0,
    resultIsLastPage: false,
    searchKeyword: '',
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
            state.seat = action.payload;
        },
        setResultStores(state, action) {
            state.resultStores = action.payload;
        },
        setResultTotalCount(state, action) {
            state.resultTotalCount = action.payload;
        },
        setResultPage(state, action) {
            state.resultPage = action.payload;
        },
        setResultIsLastPage(state, action) {
            state.resultIsLastPage = action.payload;
        },
        setSearchKeyword(state, action) {
            state.searchKeyword = action.payload;
        },
    },
});

export const {
    setExpectedDate,
    setRegion,
    setFoodType,
    setPriceMin,
    setPriceMax,
    setAtmosphere,
    setSeat,
    setResultStores,
    setResultTotalCount,
    setResultPage,
    setResultIsLastPage,
    setSearchKeyword,
} = filterSlice.actions;

export default filterSlice;

export type AddressType = {
    postalCode: string;
    roadAddress: string;
    detailAddress: string;
};

export type OperatingHoursType = {
    openingHour: string;
    openingMinute: string;
    closingHour: string;
    closingMinute: string;
};

export type StoreType = {
    storeId: number;
    userId: number;
    storeName: string;
    storeContact: string;
    address: AddressType;
    description: string;
    operatingHours: OperatingHoursType;
    closedDays: string;
    foodCategory: string;
    maxNum: number;
    cost: number;
    isParking: number;
    createdAt: string;
    modifiedAt: string;
    averageRating: number;
    reviewCount: number;
    isDeleted: number;
    location: string;
    keyword: string;
    mood: string;
    isRoom: number;
    imageUrl: string;
};
