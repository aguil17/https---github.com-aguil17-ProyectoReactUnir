import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";
import { GlobalRouter } from "../routes/GlobalRouter";

import '../styles/styles.css'


export const OnlineStore = () =>
{
    return (
        <div className="principal row">
            <div className="principal__raiz col-12">
                <Header/>
                <GlobalRouter></GlobalRouter>
                <Footer/>
            </div>
        </div>
    );
}