import React from "react";
import { useState } from "react";
import menuIcon from '../images/menuIcon.png';
import Lane from "./Lane";
import Sidebar from "./Sidebar";

export default function Escalacao(props) {

    const [showElement, setShowElement] = useState(false);

    function showOrHide() {
        if(showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    return (
        <div className="escalacao-container">
            { showElement ? <Sidebar showOrHide={showOrHide}/> : null }
            
            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide}/>
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