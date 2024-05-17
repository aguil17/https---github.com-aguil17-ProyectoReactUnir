import React, { useState } from 'react';
import logoApp from '../imagenes/logoApp.svg';
import person from '../imagenes/person.svg';
import cesta from '../imagenes/cesta.svg';


export const Header = () =>
{

    return (
        <div className="cabecera row">
            <div className="cabecera__logo col-md-2">
            UnirExpress
            </div>
            <div className="col-md-2">
                <img src={logoApp} alt="app" className='principal__header__base_icons'></img>
                <span className='cabecera__link icon-text'>Descarga la App <br/> Unir Express</span>
            </div>
            <div className="col-md-2">
                <img src={person} alt="app" className='principal__header__base_icons'></img> 
                <span className='cabecera__link icon-text'>Bienvenido <br/> Identifícate / Regístrate</span>
            </div>
            <div className="col-md-6">
                <img src={cesta} alt="app" className='principal__header__base_icons'></img>
                <span className='cabecera__link icon-text'>Cesta: 5 productos</span>
            </div>
        </div>          
    );
}