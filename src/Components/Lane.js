import React from "react";
import { useState } from 'react'
import simboloBot from '../images/lanes/Position_Gold-Bot-transformed.png';
import simboloSup from '../images/lanes/Position_Gold-Support-transformed.png';
import simboloMid from '../images/lanes/Position_Gold-Mid-transformed.png';
import simboloTop from '../images/lanes/Position_Gold-Top-transformed.png';
import simboloJg from '../images/lanes/Position_Gold-Jungle-transformed.png';
import Popup from "./Popup";

function Lane(props) {

    const [showElement, setShowElement] = useState(false);

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    let simbolo;

    switch (props.laneName) {
        case 'TOP':
            simbolo = simboloTop
            break;
        case 'JUNGLE':
            simbolo = simboloJg
            break;
        case 'MID':
            simbolo = simboloMid
            break;
        case 'ADC':
            simbolo = simboloBot
            break;
        case 'SUP':
            simbolo = simboloSup
    }

    return (
        <>
            {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} /> : null}
            <div className="player-container"></div>
            
            <div className="player-img-area" onClick={showOrHide}>
                <img className="lane-img" src={simbolo} alt="adicionar" />
            </div>
        </>
    );
}

export default Lane;