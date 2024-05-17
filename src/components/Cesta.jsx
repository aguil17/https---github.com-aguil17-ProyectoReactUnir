import React, { useState, useEffect } from 'react';
import { CestaDetail } from './CestaDetail';
import { Pago } from '../components/Pago';
import camara01_normal from '../imagenes/productos/camaras/camara01_normal.webp';
import camara02_normal from '../imagenes/productos/camaras/camara02_normal.webp';
import camara03_normal from '../imagenes/productos/camaras/camara03_normal.webp';

export const Cesta = () => {
    const [products, setProducts] = useState([
        {
            imagen: camara01_normal,
            titulo: "Cámara IP 2K con WIFI 2,4G",
            descripcion: "Xiaomi-cámara IP 2K 1296P 180 °, Monitor de seguridad para bebés, Webcam, visión nocturna, vídeo AI, detección humana, vigilancia Mi Smart Home",
            faltantes: 10,
            moneda: "$",
            precio: 100,
            cantidad: 1,
            seleccionado: false
        },
        {
            imagen: camara02_normal,
            titulo: "Cámara de seguridad CCTV falsa",
            descripcion: "Xiaomi-cámara IP 2K 1296P 180 °, Monitor de seguridad para bebés, Webcam, visión nocturna, vídeo AI, detección humana, vigilancia Mi Smart Home",
            faltantes: 10,
            moneda: "$",
            precio: 50,
            cantidad: 1,
            seleccionado: false
        },
        {
            imagen: camara03_normal,
            titulo: "Cámara inteligente de seguridad",
            descripcion: "Xiaomi-cámara IP 2K 1296P 180 °, Monitor de seguridad para bebés, Webcam, visión nocturna, vídeo AI, detección humana, vigilancia Mi Smart Home",
            faltantes: 10,
            moneda: "$",
            precio: 40,
            cantidad: 1,
            seleccionado: false
        }
    ]);

    const [totalSeleccionado, setTotalSeleccionado] = useState(0);

    const handleToggleProduct = (product, isSelected) => {
        const updatedProducts = products.map(p => {
            if (p === product) {
                return { ...p, seleccionado: isSelected };
            }
            return p;
        });
        setProducts(updatedProducts);
        updateTotal(updatedProducts);
    };

    const handleUpdateQuantity = (product, newQuantity) => {
        const updatedProducts = products.map(p => {
            if (p === product) {
                return { ...p, cantidad: newQuantity };
            }
            return p;
        });
        setProducts(updatedProducts);
        updateTotal(updatedProducts);
    };

    const updateTotal = (updatedProducts) => {
        const newTotalSeleccionado = updatedProducts.reduce((total, p) => {
            if (p.seleccionado) {
                return total + (p.precio * p.cantidad);
            }
            return total;
        }, 0);
        setTotalSeleccionado(newTotalSeleccionado);
    };


    return ( 
        <div className="cesta row">
            <div className="cestaProductos col-md-9">
                {products.map((product, index) =>
                (
                    <CestaDetail 
                        key={index}
                        productImage={product}
                        onToggle={handleToggleProduct}
                        onUpdateQuantity={handleUpdateQuantity}
                    />
                ))}
            </div>
            <div className="col-md-3">
            <Pago total={totalSeleccionado} />
            </div>
        </div>
    );
};
