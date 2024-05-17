import React, { useState, useEffect } from 'react';
import {Product}  from "./Product";
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
import { useNavigate } from 'react-router-dom';

export const ProductList = () =>
{
    //No usado porque se hace llamadas por fetch
    const products = [
        {
            imagen: camara01_normal,
            titulo: "Cámara IP 2K con WIFI 2,4G",
            descripcion: "Cámara de vigilancia Solar LS VISION 2K 4G/WiFi, batería integrada de 10400mAh, 4MP de cámara PTZ, habla bidireccional, cámara de seguridad inalámbrica para exteriores",
            nroVendidos: 1000,
            moneda: "$",
            precio: 23
        },
        {
            imagen: camara02_normal,
            titulo:"Cámara de seguridad CCTV falsa",
            descripcion:'Cámara falsa de seguridad para el hogar, sistema de vigilancia con simulación de alarma antirrobo, con LED rojo parpadeante, para interior y exterior, novedad',
            nroVendidos: 349,
            moneda: "$",
            precio: 15
        },
        {
            imagen: camara03_normal,
            titulo: "Cámara inteligente de seguridad",
            descripcion:'BELIA-cámara de vigilancia 4K de 8MP con WiFi, lente Dual, Zoom Digital 4X, detección humana por Ia, ONVIF, cámaras IP PTZ de seguridad para exteriores',
            nroVendidos: 108,
            moneda: "$",
            precio: 26
        },
        {
            imagen: taladro01_normal,
            titulo: "Taladro eléctrico de mano multifuncional",
            descripcion:'YIKODA-taladro inalámbrico de 12/16.8/21V, destornillador eléctrico recargable con batería de litio, herramientas eléctricas multifunción de 2 velocidades para el hogar',
            nroVendidos: 108,
            moneda: "$",
            precio: 26
        },
        {
            imagen: mochila1_normal,
            titulo: "Disney-Mini mochila escolar",
            descripcion:'Disney-Mini mochila escolar con dibujos animados de Minnie para niños, bonito para niños y niñas bolso de hombro, novedad de 2024',
            nroVendidos: 3000,
            moneda: "$",
            precio: 4
        },
        {
            imagen: auriculares1_normal,
            titulo: "Lenovo LP40 Pro Auriculares Inalámbricos",
            descripcion:'Lenovo-LP40 Pro TWS Auriculares Inalámbricos, Cascos Deportivos con Bluetooth 5.1, Reducción de Ruido, Control Táctil, Batería de 250 mAh, Originales, Novedad de 2022',
            nroVendidos: 10000,
            moneda: "$",
            precio: 9
        },
        {
            imagen: pegatina1_normal,
            titulo: "Pegatina de advertencia de seguridad",
            descripcion:'Pegatinas de advertencia de 4/8 piezas, cinta adhesiva de alarma para cámara de seguridad de videovigilancia las 24 horas, videovigilancia, tienda en casa, escuela, etc.',
            nroVendidos: 500,
            moneda: "$",
            precio: 4
        },
        {
            imagen: cubierta1_normal,
            titulo: "Cubiertas protectoras de pared",
            descripcion:'Cubiertas protectoras impermeables para pared, caja de protección para cámara de seguridad, a prueba de lluvia, torreta CCTV',
            nroVendidos: 367,
            moneda: "$",
            precio: 4
        },
        {
            imagen: camara04_normal,
            titulo: "Cámara inalámbrica de doble lente",
            descripcion:'Cámara PTZ 4K 8MP HD Wifi para exteriores, lente Dual de 4MP, pantalla Dual AI, seguimiento automático, cámara IP CCTV, Audio, videovigilancia P2P iCSee',
            nroVendidos: 92,
            moneda: "$",
            precio: 4
        },
        {
            imagen: cargador1_normal,
            titulo: "Cargador de batería de coche de 12V",
            descripcion:'Cargador de batería de coche de 12V, 6A, reparación de pulso, pantalla LCD, carga rápida inteligente, AGM, GEL de ciclo profundo, cargador de plomo-ácido para motocicleta automática',
            nroVendidos: 50000,
            moneda: "$",
            precio: 48
        }
    ]

    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    const redirectToBuscarProductos = () => {
        navigate(`/busqueda/${searchValue}`);
    };

    const redirecToMisPedidos = () => {
        navigate(`/misPedidos/1`);
    };

    return ( 
        <div>
            <div className="productListbusqueda">
                <div className="productListbusqueda__fila row">
                    <div className='col-2'>
                        <input className='productListbusqueda__input'
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}></input>
                    </div>
                    <div className='productListbusqueda__buscar col-2'>
                        <button type="button" className="btn btn-primary" onClick={redirectToBuscarProductos}>Buscar Productos</button>
                    </div>
                    <div className='productListbusqueda__pedidos col-2'>
                        <button type='button' className='productListbusqueda__botonPedidos btn btn-danger' onClick={redirecToMisPedidos}>Mis Pedidos</button> 
                    </div>
                </div>
            </div>
            
             <div className="listadoProductos">
                {products.map((product,index) =>
                (
                    <Product 
                        key={index}
                        productImage={product}
                    />
                ))}
            </div>
        </div>
    );
}

