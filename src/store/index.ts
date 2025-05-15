import { configureStore } from '@reduxjs/toolkit'
import { carrinhoReducer } from './reducers/carrinhoReducer'
import { favoritosReducer } from './reducers/favoritosReducer'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
