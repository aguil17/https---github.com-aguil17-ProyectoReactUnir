import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import llavero1_grande from '../imagenes/productos/llaveros/llavero1_grande.webp';

export const AnadirCesta = () =>
    {
        const { idProducto } = useParams();
        const navigate = useNavigate();

        console.log(idProducto);

        const productEncontrado = 
                    {
                        imagen: llavero1_grande,
                        titulo : "Cámara IP 2K con WIFI 2,4G",
                        descripcion: "Xiaomi-cámara IP 2K 1296P 180 °, Monitor de seguridad para bebés, Webcam, visión nocturna, vídeo AI, detección humana, vigilancia Mi Smart Home",
                        nroVendidos: 100,
                        moneda: "$.",
                        precio: 200,
                        color: "Negro",
                        garantia:"Métodos de pago usados por muchos compradores internacionales",
                        observaciones: "5 pieza(s) como máximo por cliente"
                    };

        if (!productEncontrado) {
            return <div>Loading...</div>;
        }

        console.log("recibiendo parametro idProducto:" + idProducto);

        const redirectToCesta = () => {
            navigate(`/cesta/${idProducto}`);
          };      
          
        const redirectToHome = () => {
            navigate(`/`);
          };       

        return (
            <div className="anadirCesta row">
                <div className="col-md-4">
                    <img src={productEncontrado.imagen} className="anadirCesta__imagen" alt={productEncontrado.titulo}/>
                </div>
                <div className="col-md-4">
                    <h3 className="anadirCesta__titulo">{productEncontrado.titulo}</h3>
                    <p>{productEncontrado.descripcion}</p>
                    <p className="anadirCesta__precio">Precio: {productEncontrado.moneda} {productEncontrado.precio}</p>
                    <p>{productEncontrado.nroVendidos} vendidos</p>
                    <p>Color: {productEncontrado.color}</p>
                    <p>Garantía: {productEncontrado.garantia}</p>
                </div>
                <div className="col-md-4">
                    <p>Cantidad:</p>
                    <p className="anadirCesta__cantidad"><input className='anadirCesta_precio_cantidad' type="number" id="cantidad" defaultValue="1"></input></p>
                    <p>{productEncontrado.observaciones}</p>
                    <p className="anadirCesta__cesta"><button className="btn btn-danger" onClick={redirectToCesta}>Añadir a Cesta</button></p>
                    <p className="anadirCesta__home"><button className="btn btn-success" onClick={redirectToHome}>Regresar al Home</button></p>
                </div>
            </div>
        )
    }
