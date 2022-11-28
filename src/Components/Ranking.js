import React from "react";
import { useState } from "react";
import menuIcon from '../images/menuIcon.png';
import Sidebar from "./Sidebar";

export default function Ranking(props) {

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
        <div className="ranking-container">
            { showElement ? <Sidebar showOrHide={showOrHide}/> : null }
            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                </div>
                <div className="area-text">
                    <p className="escolha-text">Ranking de jogadores</p>
                </div>
            </div>

            <div className="ranking">
                
                <div className="podio mb-5">
                    <div className="podio-group">
                        <p className="colocacao">2º LUGAR</p>
                        <div className="segundo-terceiro"></div>
                        <p className="podio-name">luizinho</p>
                        <p className="pontuacao-podio">120.1 pts</p>
                    </div>

                    <div className="podio-group">
                        <p className="colocacao">1º LUGAR</p>
                        <div className="primeiro"></div>
                        <p className="podio-name">carrope</p>
                        <p className="pontuacao-podio">125.3 pts</p>
                    </div>
                    
                    <div className="podio-group">
                        <p className="colocacao">3º LUGAR</p>
                        <div className="segundo-terceiro"></div>
                        <p className="podio-name">Ene</p>
                        <p className="pontuacao-podio">115.5 pts</p>
                    </div>
                </div>

                <div className="table-area">
                    <table class="table">
                        <thead className="topo-tabela">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Jogador</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody className="corpo-tabela">
                            <tr>
                                <th scope="row">4</th>
                                <td>MrNakata</td>
                                <td>110.2 pts</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>ManuelMilton</td>
                                <td>101.7 pts</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Leozin</td>
                                <td>98.4 pts</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Você</td>
                                <td>73.5 pts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}