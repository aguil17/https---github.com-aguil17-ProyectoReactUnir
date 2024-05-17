import React, { useState, useEffect } from 'react';
import { PagarLista } from './PagarLista';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import UsarMensajeExito from '../hooks/UsarMensajeExito';
import {ModalExitoso} from './ModalExitoso'

export const Pagar = () =>
{
    const [selectedOption, setSelectedOption] = useState('Tarjeta Visa');

    const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
    };

    const [esVisible, mensaje, mostrarMensaje] = UsarMensajeExito();

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
      };        

    const realizarPago = () =>
    {
        mostrarMensaje();
    }

    return ( 
        <div className='opcionPagar row'>
           <div className= 'opcionPagar__opciones col-md-8'>
                <div className='opcionPagar__opciones__contenedor'>
                    <div>
                        <div className='opcionPagar__direccion'><span>Dirección de entrega</span></div>
                        <div><textarea cols="80" rows="4"></textarea></div>
                    </div>
                    <div>
                        <div className='opcionPagar__tarjeta'><span>Tarjeta de Crédito</span></div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <Dropdown onSelect={handleSelect}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedOption}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Tarjeta Visa">Visa</Dropdown.Item>
                                        <Dropdown.Item eventKey="Master Card">Master Card</Dropdown.Item>
                                        <Dropdown.Item eventKey="American Express">American Express</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='opcionPagar_tarjetaTitularCvv row'>
                            <div className='opcionPagar__numeroTarjeta col-md-5'>
                                <input type='text' placeholder='Número de Tarjeta'></input>
                            </div>
                            <div className=' opcionPagar__nombreTitular col-md-6'>
                                <input type='text' placeholder='Nombre del Titular'></input>
                            </div>
                        </div>
                        <div className='opcionPagar_tarjetaTitularCvv row'>
                            <div className='opcionPagar__Cvv col-md-5'>
                                <input type='text' placeholder="CVV"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='opcionPagarProductos'>
                        <span>Productos</span>
                    </div>
                    <PagarLista />
                    </div>
                </div>

           </div>
           <div className='pagar__principal__resumen col-md-4'>
            <div className='pagar__principal__opciones_contenedor'>
                    <div className='pagar__principal__resumen__titulos'><span>Resumen</span></div>
                        <div className='row'>
                            <div className='col-md-6'><span>Subtotal:</span></div>
                            <div className='col-md-6'><span>DOL 23.69</span></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'><span>Total de envío:</span></div>
                            <div className='col-md-6'><span>DOL 7.66</span></div>
                        </div>
                        <div className='pagar__principal__resumen__titulos_total row'>
                            <div className='col-md-6'><span>Total:</span></div>
                            <div className='col-md-6'><span>DOL 31.35</span></div>
                        </div>
                        <div className='pagar__principal__resumen__pago'>
                            <button type='button' className='btn btn-danger btn-md pagar__principal__resumen__pago_boton' onClick={realizarPago}>Comprar</button>
                            <ModalExitoso
                                isOpen={esVisible}
                                message={mensaje}
                            />
                        </div>
                        <div className='pagar__principal__resumen__pago'>
                            <button type='button' className='btn btn-success btn-md pagar__principal__resumen__pago_boton' onClick={redirectToHome}>Regresar al Home</button>
                        </div>
                </div>
           </div>
        </div>
    );
}