import React, { useState, useEffect } from 'react';
import { ProductBusqueda } from './ProductBusqueda';
import { PagarProducto } from './PagarProducto';

import camara01_normal from '../imagenes/productos/camaras/camara01_normal.webp';
import camara02_normal from '../imagenes/productos/camaras/camara02_normal.webp';
import camara03_normal from '../imagenes/productos/camaras/camara03_normal.webp';
import taladro01_normal from '../imagenes/productos/taladros/taladro1_normal.webp';
import mochila1_normal from '../imagenes/productos/mochilas/mochila1_normal.webp'
import auriculares1_normal from '../imagenes/productos/auriculares/auriculares1_normal.webp';
import pegatina1_normal from '../imagenes/productos/pegatinas/pegatina1_normal.webp';
import cubierta1_normal from '../imagenes/productos/cubiertas/cubierta1_normal.webp';
import camara04_normal from '../imagenes/productos/camaras/camara04_normal.webp';
import cargador1_normal from '../imagenes/productos/cargadores/cargador1_normal.webp';
export const PagarLista = () => {

    const products = [
        {
            imagen: camara01_normal,
            titulo: "Cámara IP 2K con WIFI 2,4G",
            nroVendidos: 1000,
            moneda: "$",
            precio: 23
        },
        {
            imagen: camara02_normal,
            titulo:"Cámara de seguridad CCTV falsa",
            nroVendidos: 349,
            moneda: "$",
            precio: 15
        },
        {
            imagen: camara03_normal,
            titulo: "Cámara inteligente de seguridad",
            nroVendidos: 108,
            moneda: "$",
            precio: 26
        }
    ]
    
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