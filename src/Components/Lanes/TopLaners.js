import React from "react";


export default function JogadoresTop(props) {
    function click() {
        props.showOrHide()
        props.setFotoTop(props.jogador.img_url)
    }
    return (
        <div className="popup-area" onClick={click} >

            <img className="player-img" src={props.jogador.img_url}></img>
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
};
