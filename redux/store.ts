import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/basketSlice";

const combinedReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
