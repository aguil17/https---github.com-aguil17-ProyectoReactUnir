import { useState, useEffect } from 'react';

const UsarMensajeExito = () => {
    const [esVisible, setEsVisible] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const mostrarMensaje = (msg = 'La operación se realizó con éxito') => {
        setMensaje(msg);
        setEsVisible(true);
    };

    useEffect(() => {
        if (esVisible) {
            const timer = setTimeout(() => {
                setEsVisible(false);
            }, 3000);

            return () => clearTimeout(timer); 
        }
    }, [esVisible]);

    return [esVisible, mensaje, mostrarMensaje];
};

export default UsarMensajeExito;
