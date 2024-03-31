import rootSlice from "./rootSlice";

// import { combineReducers } from 'redux';
import { combineSlices,configureStore } from '@reduxjs/toolkit';

const reducer = combineSlices({
    root: rootSlice,
});

const store = configureStore({
    reducer,
});

export default store;