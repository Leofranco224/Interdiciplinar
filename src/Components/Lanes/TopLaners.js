import React from "react";
import placeholder from '../../images/placeholderJogador.png';

export default function JogadorTop(props) {
    return (
        <div className="popup-area" onClick={props.showOrHide}>

            <img className="player-img" src={placeholder} alt="player"></img>
            <div className="player-info">
                <p className="player-name" > Name</p>
                <p className="player-team" > Team</p>
                <p className="player-stats" > Stats</p>
            </div>
            <div className="player-match-info">
                <p className="player-name" > CS </p>
                <p className="player-team" > K/D/A</p>
            </div>

            <div className="player-total-points">

                <p className="player-points" > 8 </p>

            </div>
        </div>
    );
}