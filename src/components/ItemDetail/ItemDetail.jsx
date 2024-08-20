import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    return(
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name}/>
            <p>{product.descrption}</p>
            <p>USD{product.price}</p>
            <p>STOCK DISPONIBLE: {product.stock}</p>
            <p>Categoria: {product.category}</p>

            <ItemCount initial={1} stock={product.stock}/>
        </div>
    )
}

export default ItemDetail