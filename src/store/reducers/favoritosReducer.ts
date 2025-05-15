import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito(state, action: PayloadAction<Produto>) {
      const item = action.payload

      const index = state.itens.findIndex((produto) => produto.id === item.id)

      if (index !== -1) {
        alert('Item Removido!')
        state.itens.splice(index, 1)
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { addFavorito } = favoritosSlice.actions
export const favoritosReducer = favoritosSlice.reducer
