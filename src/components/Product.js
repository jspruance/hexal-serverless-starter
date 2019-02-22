import React from 'react';

export default function Product(props) {
  return (
    <div className="tile is-child box notification is-success">
      <button onClick={event => props.handleDeleteProduct(props.name, event)} className="delete"></button>
      <p className="product-title">{ props.name }</p>
    </div>
  )
}
