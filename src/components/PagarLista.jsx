import React, { useState, useEffect } from 'react';
import { ProductBusqueda } from './ProductBusqueda';
import { PagarProducto } from './PagarProducto';

export const PagarLista = () => {

    const productosSeleccionados = localStorage.getItem("PagarProductos");
    const products = JSON.parse(productosSeleccionados);
    
    
    return ( <div className="pagarLista">
    {products.map((product,index) =>
    (
        <PagarProducto 
            key={index}
            productEncontrado={product}
        />
    ))}
</div>);

};