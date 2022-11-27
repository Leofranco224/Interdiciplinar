import React from "react";
import menuIcon from '../images/menuIcon.png';
import Lane from "./Lane";

export default function Escalacao(props) {
    return (
        <div className="escalacao-container">
            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" />
                </div>
                <div className="area-text">
                    <p className="escolha-text">Escolha seu time</p>
                </div>
            </div>
            <div className="escalacao">
                <div className="escalacao-area">
                    <Lane laneName="TOP" />
                    <Lane laneName="JUNGLE" />
                    <Lane laneName="MID" />
                    <Lane laneName="ADC" />
                    <Lane laneName="SUP" />
                </div>
                <div className="pontuacao-area">
                    <p className="pontuacao-text">Pontuação: <span className="pontos">73.5</span></p>
                </div>
            </div>
        </div>
    );
}