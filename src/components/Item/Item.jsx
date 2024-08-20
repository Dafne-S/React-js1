import React from 'react'
import './Item.css'

const Item = ({item}) => {
    return(
        <div key={item.id} className="card">
            <h2>{item.nombre}</h2>
                    <img src={item.imagen} alt="{item.nombre}"/>
                    <p className='descrip'>{item.descripcion}</p>
                    <p className='precio'>${item.precio}</p>
                    <p className='stock'>STOCK DISPONIBLE:{item.stock}</p>
                </div>
            )
        }

export default Item