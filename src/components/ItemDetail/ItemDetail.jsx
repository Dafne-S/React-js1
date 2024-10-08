import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    return(
        <div>
            <h2>{'product.nombre'}</h2>
            <img src={'product.imagen'} alt={'product.nombre'}/>
            <p>{'product.descripcion'}</p>
            <p>USD{'product.precio'}</p>
            <p>STOCK DISPONIBLE: {'product.stock'}</p>
            <p>Categoria: {'product.category'}</p>

            <ItemCount initial={1} stock={'product.stock'}/>
        </div>
    )
}

export default ItemDetail;