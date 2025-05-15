import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Produto>) {
      const item = action.payload

      if (state.itens.find((produto) => produto.id === item.id)) {
        alert('Item já adicionado!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { addItem } = carrinhoSlice.actions
export const carrinhoReducer = carrinhoSlice.reducer
