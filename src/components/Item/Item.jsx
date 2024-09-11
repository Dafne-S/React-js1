import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return(
        <Link to={`/item/${item.id}`}>
        <div key={item.id} className="card">
            <h2>{item.nombre}</h2>
                    <img src={item.imagen} alt="{item.nombre}"/>
                    <p className='descrip'>{item.descripcion}</p>
                    <p className='precio'>USD{item.precio}</p>
                    <p className='stock'>STOCK DISPONIBLE:{item.stock}</p>
                </div>
                </Link>
            )
        }

export default Item