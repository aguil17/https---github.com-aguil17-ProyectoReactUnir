import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pago = ({total}) =>
{

    const navigate = useNavigate();

    const redirectToBuscarPago = () => {

        navigate(`/pagar`);
    };

    const redirectToHome= () => {

        navigate(`/`);
    };

    return ( 
        <div className='pago'>
            <div>
                <span className='pago_total'>$/.{total}</span>
            </div>
            <div>
                <button type="button" className="btn btn-primary btn-md pago__boton" onClick={redirectToBuscarPago}>Pagar productos</button>
            </div>
            <div>
                <span>Envío Gratis Disponible</span>
            </div>
            <div>
                <button type="button" className="btn btn-success btn-md pago__boton" onClick={redirectToHome}>Regresar al Home</button>
            </div>
        </div>
    );
}

