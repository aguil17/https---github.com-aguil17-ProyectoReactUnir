import React from "react";
import { useState } from "react";


export const CestaDetail = ({ productImage, onToggle , ActualizarCantidad }) => {
    const [cantidad, setCantidad] = useState(1);

    const manejarCheckboxCambio = (event) => {
        const isChecked = event.target.checked;
        onToggle(productImage, isChecked);
    };

    const manejarCambioCantidad = (event) => {
        const nuevaCantidad = parseInt(event.target.value);
        setCantidad(nuevaCantidad);
        ActualizarCantidad(productImage, nuevaCantidad);
    };
    return (
        <div className="cestaDetail row">
            <div className="col-md-1 d-flex align-items-center">
                <div className="form-check">
                    <input 
                            className="cestaDetail__checkbox form-check-input" 
                            type="checkbox" 
                            checked={productImage.seleccionado} 
                            onChange={manejarCheckboxCambio}
                        />
                </div>
             </div>
            <div className="col-md-3">
                <img className="cestaDetail__imagen" src={productImage.imagen} alt={productImage.titulo}/>
            </div>
            <div className="col-md-8">
                <p className="cestaDetail__titulo">{productImage.titulo}</p>
                <p>{productImage.descripcion}</p>
                <p>Quedan {productImage.faltantes} unidades</p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="cestaDetail__precio" >Precio Unitario: {productImage.moneda} {productImage.precio}</p>
                    </div>
                    <div className="col-md-6">
                        <p >Cantidad: <input 
                            type="number" 
                            className="cestaDetail__cantidad" 
                            value={cantidad} 
                            onChange={manejarCambioCantidad} 
                            min="1"/>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

