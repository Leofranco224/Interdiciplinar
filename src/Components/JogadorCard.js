import React from "react";

export default function JogadorCard(props) {
    return (
        <div className="popup-area" onClick={props.showOrHide}>
            <div className="img-popup"></div>
            <div className="player-information">
                <div className="top-information mb-2">
                    <p className="name-title">Nome</p>
                    <div className="time-area">
                        <div className="lane-img"></div>
                        <p className="name-title">Pain</p>
                    </div>
                </div>
                <p className="information-text">Dados da última partida</p>
                <p className="information-text">KDR: 10/2/5</p>
                <p className="information-text">Farm: 251</p>
                <p className="information-text">Ultima pontuação: 15.3</p>
            </div>
        </div>
    );
}