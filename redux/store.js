import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux"; 

const reducers = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
});

export default store;