import React from "react";
import { MisPedidosDetalle } from "./MisPedidosDetalle";

export const MisPedidos = () =>
{
        const clienteDetalle = 
        {
            id : 1
        };

        return ( <div className="misPedidosOpcion">
            <MisPedidosDetalle 
                cliente={clienteDetalle}
            />
    </div>);
}
