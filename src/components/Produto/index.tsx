import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { RootState } from '../../store'

import { addItem } from '../../store/reducers/carrinhoReducer'
import { addFavorito } from '../../store/reducers/favoritosReducer'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritosItens = useSelector((state: RootState) => state.favoritos)

  const isFavorito = favoritosItens.itens.find((item) => item.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(addFavorito(produto))}
        type="button"
      >
        {isFavorito ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addItem(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
