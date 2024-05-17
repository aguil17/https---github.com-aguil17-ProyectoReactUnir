import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { MisPedidosDetalleProducto } from './MisPedidosDetalleProducto';
import camara01_normal from '../imagenes/productos/camaras/camara01_normal.webp';
import { useParams } from "react-router-dom";
import { Button } from 'bootstrap';

export const MisPedidosDetalle = ({cliente}) =>
{
        const idCliente  = cliente.id;

        console.log("Pedidos de mi cliente:" + idCliente);

        const [selectedOption, setSelectedOption] = useState('el último mes');

        const handleSelect = (eventKey) => {
          setSelectedOption(eventKey);
        };

        const navigate = useNavigate();

    
        const redirectToHome = () => {
            navigate('/');
          };      
    

        const pedidos = [
            {
                fecha: "01 de Enero 2024",
                moneda: "$.",
                total: 1000.50,
                destinatario: "Juan Aguilar Abanto",
                nroPedido: "0001-2024",
                productos:
                [
                    {
                        titulo: "Cámara IP 2K con WIFI 2,4G",
                        descripcion: "Cámara de vigilancia Solar LS VISION 2K 4G/WiFi, batería integrada de 10400mAh, 4MP de cámara PTZ, habla bidireccional, cámara de seguridad inalámbrica para exteriores",
                        imagen: camara01_normal,
                        moneda: "$.",
                        precio: 1000.50,
                        vendedor: "Juan Aguilar Abanto"
                    }
                ]
            }
        ];

        return (
            <div>
                <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pedidos</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Pedidos en Curso</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Pedidos cancelados</button>
                </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className='misPedidosDetallePedidosRealizados row'>
                        <div className='col-md-10'>
                            <span>12 pedidos realizados en </span>
                            <Dropdown onSelect={handleSelect} className='d-inline'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {selectedOption}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey ="el último mes" >el último mes</Dropdown.Item>
                                    <Dropdown.Item eventKey = "los últimos 3 meses">los últimos 3 meses</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='misPedidosDetallePedidosRealizados_IrHome col-md-2'>
                            <button type='button' className='btn btn-danger col text-right' onClick={redirectToHome}>Regresar al Home</button>
                        </div> 
                    </div>

                    {pedidos.map((pedido,index) =>
                        (
                            <div>
                                <div className="misPedidos row">
                                    <div className="col-md-3">
                                        <span className="misPedidosDetalle__titulo">Pedido realizado</span>
                                        <p className="card__vendidos">{pedido.fecha}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="misPedidosDetalle__total">Total</span>
                                        <p className="card__vendidos">{pedido.moneda} {pedido.total}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="misPedidosDetalle__enviar">Enviar a:</span>
                                        <p className="card__vendidos">{pedido.destinatario}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="misPedidosDetalle__nro">Pedido Nro:</span>
                                        <p className="card__vendidos">{pedido.nroPedido}</p>
                                    </div>
                                    <div className='misPedidosRow_productos row'>
                                        <div className="col-md-12">
                                            <span className="misPedidosDetalle__tituloListado">Listado de Productos dentro del pedido</span>
                                        </div>
                                        <div className="col-md-12">
                                            {pedido.productos.map((producto,index) =>
                                            (
                                                <MisPedidosDetalleProducto
                                                    key={index}
                                                    productImage={producto}
                                                />
                                            ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                        ))}

                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div> 
            </div>
        );
}
