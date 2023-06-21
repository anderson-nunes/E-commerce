import React, { useContext } from 'react'
import { ProductContext } from '../../hooks/useProductContext'
import { FiShoppingCart } from 'react-icons/fi'
import * as S from './styles'

export const Card = ({ item, addItem }) => {

  const { addProductsCart } = useContext(ProductContext)

  return (
    <S.CardFigure>
      <div>
        <img src={`${item.url}`} />
      </div>
      <span>
        <h3>{item.name}</h3>
        <p>Valor:
          {item.price.toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' }
          )}
        </p>
        <p>{item.portion}</p>
      </span>
      <button
        onClick={() => addProductsCart(item)}>
        <FiShoppingCart />
        adicionar
      </button>
    </S.CardFigure>
  )
}