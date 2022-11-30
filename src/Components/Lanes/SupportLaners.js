import React from "react";

export default function JogadorSupport(props) {

    function click() {
        props.showOrHide()
        props.setFotoSup(props.jogador)
    }

    return (
        <div className="popup-area mb-3" onClick={click} >

            <img className="player-img" src={props.jogador.img_url} alt="player" />
            <div className="player-info">
                <p className="player-name" > Nome: {props.jogador.nome} </p>
                <p className="player-team" > Team: {props.jogador.time}</p>
            </div>
            <div className="player-match-info">
                <p className="player-name" > CS: {props.jogador.media_farm}</p>
                <p className="player-team" > K/D/A</p>
            </div>

            <div className="player-total-points">
                <p className="player-points" > 8 </p>
            </div>
        </div>
    );
}