import React from 'react'

const Item = ({item}) => {
    return(
        <div key={item.id} className="card">
                    <img src={item.imagen} alt="{item.nombre}"/>
                    <h2>{item.nombre}</h2>
                    <p>{item.stock}</p>
                    <p>{item.descripcion}</p>
                    <p>${item.precio}</p>
                </div>
            )
        }

export default Item