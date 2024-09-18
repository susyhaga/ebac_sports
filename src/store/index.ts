import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { produtosApi } from '../services/api'
import cartReducer from './slicers/cart'
import favoritesReducer from './slicers/fav'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
