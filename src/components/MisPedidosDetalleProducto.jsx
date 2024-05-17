import React from "react";
import { useNavigate } from 'react-router-dom';

export const MisPedidosDetalleProducto = ({productImage}) =>
{
    const navigate = useNavigate();

    
    const redirectToDevolucion = () => {
        navigate('/devolverProducto/1');
      };      

    return (
        <div className="misPedidosDetalleProducto card">
            <div className="row">

                <div className="col-md-3">
                    <img className="misPedidosDetalleProducto__imagen" src={productImage.imagen} alt={productImage.titulo}/>
                </div>
                <div className="col-md-9">
                    <h3 className="misPedidosDetalleProducto__title">{productImage.titulo}</h3>
                    <p >{productImage.descripcion}</p>
                    <p >Vendedor: {productImage.vendedor}</p>
                    <p className="misPedidosDetalleProducto__monto">Monto: {productImage.moneda} {productImage.precio}</p>
                    <div><button className="btn btn-success" type="button" onClick={redirectToDevolucion}>Devolver Producto</button></div>
                </div>

            </div>
        </div>
    )
}

