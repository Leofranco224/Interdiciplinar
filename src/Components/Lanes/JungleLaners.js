import React from "react";

export default function JogadorJungle(props) {

    function click() {
        props.showOrHide()
        props.setFotoJungle(props.jogador)
    }

    return (
        <div className="popup-area mb-3" onClick={click} >
            <img className="player-img" src={props.jogador.img_url} alt="player" />
            <div className="player-box">
                <div className="player-info">
                    <p className="player-name">Nome: <span className="texto-principal">{props.jogador.nome}</span></p>
                    <p className="player-team">Team: <span className="texto-principal">{props.jogador.time}</span></p>
                </div>
                <div className="player-match-info mt-2">
                    <div className="div-ultima"><p className="label-ultima-partida">Dados da última partida</p></div>
                    <p className="player-name" > Farm: <span className="texto-principal">{props.jogador.partida_anterior?.anterior_farm}</span></p>
                    <p className="player-name" > Media de Farm: <span className="texto-principal">{props.jogador.media_farm}</span></p>
                    <p className="player-team" > K/D/A: <span className="texto-principal">{props.jogador.partida_anterior?.kda}</span></p>
                    <div className="player-total-points mt-3">
                        <p className="player-points" > Pontos: <span className="ponto-jg">{props.jogador.partida_anterior?.pontos}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}