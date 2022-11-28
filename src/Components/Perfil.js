import React from "react";
import { useState } from 'react';
import Sidebar from "./Sidebar";
import menuIcon from '../images/menuIcon.png';

export default function Perfil(props) {

    const [showElement, setShowElement] = useState(false);

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    return (
        <div className="perfil-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide}/>
                </div>
                <div className="area-text-perfil">
                    <p className="escolha-text">Perfil</p>
                </div>
            </div>

            <div className="perfil">
                <form className="perfil-form mt-3">
                    <div className="perfil-top">
                        <h3 className="perfil-title mb-5">Atualizar perfil</h3>
                        <div className="perfil-imagem"></div>
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="text"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Nome de Usuário"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="email"
                            className="form-control mt-1 inpt-dark"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Confirma Senha"
                        />
                    </div>
                    <div className="btn-area mt-3">
                        <button type="submit" className="btn btn-def">
                            Atualizar
                        </button>
                    </div>
                </form >
            </div>
        </div>
    );
}