import React from "react";


export const Product = ({productImage}) =>
{
    return (
        <div className="card">
            <img className="card__imagen" src={productImage.imagen} alt={productImage.titulo}/>
            <h3 className="card__titulo">{productImage.titulo}</h3>
            <p>{productImage.descripcion}</p>
            <p>{productImage.nroVendidos} vendidos</p>
            <p className="card__precio" >Precio: {productImage.moneda} {productImage.precio}</p>
        </div>
    )
}

