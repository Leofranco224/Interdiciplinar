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

    const [fotoTop, setFotoTop] = useState('');
    const [fotoJungle, setFotoJungle] = useState('');
    const [fotoMid, setFotoMid] = useState('');
    const [fotoBot, setFotoBot] = useState('');
    const [fotoSup, setFotoSup] = useState('');

    let selecionadoTop, selecionadoJungle, selecionadoMid, selecionadoBot, selecionadoSup, selecionado;

    if (fotoTop != '') {
        selecionadoTop = <img className="player-img-card" src={fotoTop} alt="adicionar" />
        selecionadoJungle = '';
        selecionadoMid = '';
        selecionadoBot = '';
        selecionadoSup = '';
    }
    else {
        selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
    }

    if (fotoJungle != '') {
        selecionadoTop = '';
        selecionadoJungle = <img className="player-img-card" src={fotoJungle} alt="adicionar" />
        selecionadoMid = '';
        selecionadoBot = '';
        selecionadoSup = '';
    }
    else {
        selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
    }

    if (fotoMid != '') {
        selecionadoTop = '';
        selecionadoJungle = '';
        selecionadoMid = <img className="player-img-card" src={fotoMid} alt="adicionar" />
        selecionadoBot = '';
        selecionadoSup = '';
    }
    else {
        selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
    }

    if (fotoBot != '') {
        selecionadoTop = '';
        selecionadoJungle = '';
        selecionadoMid = '';
        selecionadoBot = <img className="player-img-card" src={fotoBot} alt="adicionar" />
        selecionadoSup = '';
    }
    else {
        selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
    }

    if (fotoSup != '') {
        selecionadoTop = '';
        selecionadoJungle = '';
        selecionadoMid = '';
        selecionadoBot = '';
        selecionadoSup = <img className="player-img-card" src={fotoSup} alt="adicionar" />
    }
    else {
        selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
    }
    return (
        <>
            {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                setFotoTop={setFotoTop} setFotoJungle={setFotoJungle} setFotoMid={setFotoMid} setFotoBot={setFotoBot} setFotoSup={setFotoSup}
            /> : null}
            <div className="player-container">

            </div>
            <div className="player-img-area" onClick={showOrHide}>
                {selecionado}
                {selecionadoTop}
                {selecionadoJungle}
                {selecionadoMid}
                {selecionadoBot}
                {selecionadoSup}
            </div>
        </>
    );
}

export default Lane;