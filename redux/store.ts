import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productReducer from '@/redux/basketSlice'

const persistConfig = {
	key: 'products',
	storage,
}

// const combinedReducer = combineReducers({
// 	products: productReducer,
// })

const persistedReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
