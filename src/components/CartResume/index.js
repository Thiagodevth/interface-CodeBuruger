import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Button } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import { toast } from "react-toastify";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAlltems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAlltems)
  }, [cartProducts, deliveryTax])


  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido ...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao tentar realizar seu pedido, tente novamente ❌'
    })

  }

  return (
    <>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
        <Button style={{ width: '100%' }} onClick={submitOrder}>
          Finalizar pedido
        </Button>
      </Container>

    </>
  )
}

