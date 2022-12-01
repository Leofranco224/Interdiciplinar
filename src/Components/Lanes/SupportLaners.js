import React from "react";

export default function JogadorSupport(props) {

    function click() {
        props.showOrHide()
        props.setFotoSup(props.jogador)
    }

    return (
        <div className="popup-area mb-3" onClick={click} >
            <img className="player-img" src={props.jogador.img_url} alt="player" />
            <div className="player-box">
                <div className="player-info">
                    <p className="player-name">Nome: {props.jogador.nome}</p>
                    <p className="player-team">Team: {props.jogador.time}</p>
                </div>
                <div className="player-match-info mt-2">
                    <p className="label-ultima-partida">Dados da última partida:</p>
                    <p className="player-name" > CS: {props.jogador.media_farm}</p>
                    <p className="player-team" > K/D/A: {props.jogador.partida_anterior?.kda}</p>
                </div>
                <div className="player-total-points">
                    <p className="player-points" > Pontos: {props.jogador.partida_anterior?.pontos} </p>
                </div>
            </div>
        </div>
    );
}