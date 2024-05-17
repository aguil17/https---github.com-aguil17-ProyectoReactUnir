import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const PagarProducto = ({productEncontrado}) =>
    {
        return (
            
            <div className="pagarProducto row">
                <div className="col-md-4">
                    <img className="pagarProducto__imagen" src={productEncontrado.imagen} alt={productEncontrado.titulo}/>
                </div>
                <div className="col-md-4">
                    <h3 className="pagarProducto_titulo">{productEncontrado.titulo}</h3>
                    <p >{productEncontrado.nroVendidos} vendidos</p>
                    <p >{productEncontrado.cantidad} unidades</p>
                    <p className="pagarProducto__precio" >Precio: {productEncontrado.moneda} {productEncontrado.precio}</p>
                </div>
                <div className="col-md-4">
                    <p>5% durante la semana</p>
                    <p>Envío gratis durante el mes</p>
                </div>
            </div>
        )
    }
