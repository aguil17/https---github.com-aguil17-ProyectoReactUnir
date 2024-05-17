import React from "react";
import { ProductList } from "../components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Busqueda } from "../components/Busqueda";
import { AnadirCesta } from "../components/AnadirCesta";
import { Cesta } from "../components/Cesta";
import { Pagar } from "../components/Pagar";
import { MisPedidos } from "../components/MisPedidos";
import { DevolverProducto } from "../components/DevolverProducto";

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/busqueda/:query" element={<Busqueda/>} />
      <Route path="/anadirProductoCesta/:idProducto" element={<AnadirCesta/>} />
      <Route path="/cesta/:idCesta" element={<Cesta/>} />
      <Route path="/pagar/" element={<Pagar/>} />
      <Route path="/misPedidos/:idPedido" element={<MisPedidos/>} />
      <Route path="/devolverProducto/:idProducto" element={<DevolverProducto/>} />

      <Route path="*" element={<ProductList/>} />
    </Routes>
  </BrowserRouter>
  );
};
