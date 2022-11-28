import React from "react";
import { useState } from 'react'
import simboloAdicionar from '../images/simboloAdicionar.png';
import Popup from "./Popup";

function Lane(props) {

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
        <>
            { showElement ? <Popup showOrHide={showOrHide}/> : null }
            <div className="player-container">
                <div className="lane-area mb-3">
                    <div className="lane-img"></div>
                    <p className="lane-name">{props.laneName}</p>
                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    <img className="simbolo-adicionar" src={simboloAdicionar} alt="adicionar" />
                </div>
            </div>
        </>
    );
}

export default Lane;