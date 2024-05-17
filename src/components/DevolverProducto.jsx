import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import camara01_normal from '../imagenes/productos/camaras/camara01_normal.webp';
import { useParams } from "react-router-dom";
import UsarMensajeExito from '../hooks/UsarMensajeExito';
import {ModalExitoso} from './ModalExitoso'

export const DevolverProducto = ({}) =>
    {
        const { idProducto } = useParams();

        const product =
        {
            imagen: camara01_normal,
            titulo : "Cámara IP 2K con WIFI 2,4G",
            descripcion: "Cámara de vigilancia Solar LS VISION 2K 4G/WiFi, batería integrada de 10400mAh, 4MP de cámara PTZ, habla bidireccional, cámara de seguridad inalámbrica para exteriores",
            moneda: "S/.",
            precio : 200.50
        };

        const [selectedOption, setSelectedOption] = useState('Comprado por error');
        

        const handleSelect = (eventKey) => {
          setSelectedOption(eventKey);
        };

        const [esVisible, mensaje, mostrarMensaje] = UsarMensajeExito();

        const realizarDevolucion = () =>
            {
                mostrarMensaje();
            }

        const navigate = useNavigate();

        const retornarHome = () =>
            {
                navigate("/");
            }
    

        return (
            
            <div className="devolverProducto row">
                <div className="col-md-2">
                    <img className="misPedidosDetalleProducto__devolverProducto" src={product.imagen} alt={product.titulo}/>
                </div>
                <div className="col-md-4">
                    <h3 className="devolverProducto__titulo">{product.titulo}</h3>
                    <h3 className="devolverProducto__descripcion">{product.descripcion}</h3>
                    <p>Precio: {product.moneda} {product.precio}</p>
                </div>
                <div className="col-md-5">
                    <p>¿Por qué quieres devolver el producto?</p>
                    <p> 
                        <Dropdown className='d-inline' onSelect={handleSelect}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {selectedOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey = "Comprado por error">Comprado por error</Dropdown.Item>
                                <Dropdown.Item eventKey = "Problema de compatibilidad">Problema de compatibilidad</Dropdown.Item>
                                <Dropdown.Item eventKey = "Talla incorrecta">Talla incorrecta</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </p>
                    <p>Comentarios</p>
                    <div>
                        <textarea rows="5" cols="60"></textarea>
                    </div>
                    <button className="btn btn-primary" type="button" onClick={realizarDevolucion}>Devolver Producto</button>
                    <button className="devolverProducto__home btn btn-success" type="button" onClick={retornarHome}>Retornar al Home</button>
                    
                    <ModalExitoso
                                isOpen={esVisible}
                                message={mensaje}
                            />
                </div>
            </div>
        )
    }