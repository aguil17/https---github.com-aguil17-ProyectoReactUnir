import React, { useState, useEffect } from 'react';
import { ProductBusqueda } from './ProductBusqueda';
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
export const Busqueda = () => {

    const products = [
        {
            imagen: camara01_normal,
            titulo: "Cámara IP 2K con WIFI 2,4G",
            nroVendidos: 1000,
            moneda: "$",
            precio: 23,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: camara02_normal,
            titulo:"Cámara de seguridad CCTV falsa",
            nroVendidos: 349,
            moneda: "$",
            precio: 15,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: camara03_normal,
            titulo: "Cámara inteligente de seguridad",
            nroVendidos: 108,
            moneda: "$",
            precio: 26,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: taladro01_normal,
            titulo: "Taladro eléctrico de mano multifuncional",
            nroVendidos: 108,
            moneda: "$",
            precio: 26,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: mochila1_normal,
            titulo: "Disney-Mini mochila escolar",
            nroVendidos: 3000,
            moneda: "$",
            precio: 4,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: auriculares1_normal,
            titulo: "Lenovo LP40 Pro Auriculares Inalámbricos",
            nroVendidos: 10000,
            moneda: "$",
            precio: 9,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: pegatina1_normal,
            titulo: "Pegatina de advertencia de seguridad",
            nroVendidos: 500,
            moneda: "$",
            precio: 4,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: cubierta1_normal,
            titulo: "Cubiertas protectoras de pared",
            nroVendidos: 367,
            moneda: "$",
            precio: 4,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: camara04_normal,
            titulo: "Cámara inalámbrica de doble lente",
            nroVendidos: 92,
            moneda: "$",
            precio: 4,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        },
        {
            imagen: cargador1_normal,
            titulo: "Cargador de batería de coche de 12V",
            nroVendidos: 50000,
            moneda: "$",
            precio: 48,
            descuento: "5% durante la semana",
            detalleEnvio: "Envío gratis durante el mes"
        }
    ]
    
    return ( <div className="productBusqueda">
    {products.map((product,index) =>
    (
        <ProductBusqueda 
            key={index}
            productEncontrado={product}
        />
    ))}
</div>);

};