import React from "react";
import menuIcon from '../images/menuIcon.png';
import cartolaImg from '../images/cartolaImagem.png';
import Lane from "./Lane";
import coin from "../images/coin.gif";
import { Button } from "bootstrap";

export default function Escalacao(props) {

    return (
        <div className="escalacao-container">
            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" />
                </div>
                <img className="logo-escalacao" src={cartolaImg} alt="logo" />
                <button type="submit" className="escolha-top-text">Cartolol</button>
            </div>

            <div className="escalacao">
                <p className="escolha-text">Criação de time</p>
                <div className="escalacao-area">
                    <Lane laneName="TOP" />
                    <Lane laneName="JUNGLE" />
                    <Lane laneName="MID" />
                    <Lane laneName="ADC" />
                    <Lane laneName="SUP" />
                </div>
                <div className="pontuacao-area">
                    <p className="pontuacao-text"><span className="pontos">73.5</span></p>
                    <img src={coin} className="pontuacao-gif" alt="pontos" />
                </div>
            </div>
        </div>
    );
}