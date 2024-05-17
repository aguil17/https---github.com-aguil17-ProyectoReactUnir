import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductBusqueda = ({productEncontrado}) =>
    {

        const navigate = useNavigate();

        const redirectToProductoPrevisualizar = () => {
            navigate('/anadirProductoCesta/1');
          };        

        return (
            
            <div className="busqueda row">
                <div className="col-md-2">
                    <img className="busqueda__imagen" src={productEncontrado.imagen} alt={productEncontrado.titulo}/>
                </div>
                <div className="col-md-4">
                    <h3 className="busqueda__titulo">{productEncontrado.titulo}</h3>
                    <p>{productEncontrado.nroVendidos} vendidos</p>
                    <p className="busqueda__precio" >Precio: {productEncontrado.moneda} {productEncontrado.precio}</p>
                </div>
                <div className="col-md-4">
                    <p className="busqueda__descuento">Descuento: {productEncontrado.descuento}</p>
                    <p>{productEncontrado.detalleEnvio}</p>
                    <button className="btn btn-success busqueda__anadirCesta" onClick={redirectToProductoPrevisualizar}  type="button">Añadir a la Cesta</button>
                </div>
            </div>
        )
    }
