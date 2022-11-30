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

    let simbolo, laneSimbolo;
    let selecionadoTop, selecionadoJungle, selecionadoMid, selecionadoBot, selecionadoSup, selecionado;

    switch (props.laneName) {
        case 'TOP':
            simbolo = simboloTop
            return (renderTop());
            break;
        case 'JUNGLE':
            simbolo = simboloJg
            return (renderJungle());
            break;
        case 'MID':
            simbolo = simboloMid
            return (renderMid());
            break;
        case 'ADC':
            simbolo = simboloBot
            return (renderBot());
            break;
        case 'SUP':
            simbolo = simboloSup
            return (renderSup());
        default:

    }

    function renderTop() {

        if (props.fotoTop.img_url !== undefined) {

            selecionadoTop = <img className="player-img-card" src={props.fotoTop.img_url} alt="adicionarTop" />
            laneSimbolo = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        else {
            selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
        }

        return (
            <>
                {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                    setFotoTop={props.setFotoTop}
                /> : null}
                <div className="player-container">

                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    {selecionado}
                    {laneSimbolo}
                    {selecionadoTop}

                </div>
            </>
        );
    }

    function renderJungle() {
        if (props.fotoJungle.img_url !== undefined) {

            selecionadoJungle = <img className="player-img-card" src={props.fotoJungle.img_url} alt="adicionarJungle" />
            laneSimbolo = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        else {
            selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        return (
            <>
                {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                    setFotoJungle={props.setFotoJungle}
                /> : null}
                <div className="player-container">

                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    {selecionado}
                    {laneSimbolo}
                    {selecionadoJungle}

                </div>
            </>
        );
    }

    function renderMid() {

        if (props.fotoMid.img_url !== undefined) {

            selecionadoMid = <img className="player-img-card" src={props.fotoMid.img_url} alt="adicionarMid" />
            laneSimbolo = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        else {
            selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        return (
            <>
                {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                    setFotoMid={props.setFotoMid}
                /> : null}
                <div className="player-container">

                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    {selecionado}
                    {laneSimbolo}
                    {selecionadoMid}

                </div>
            </>
        );


    }

    function renderBot() {
        if (props.fotoBot.img_url !== undefined) {
            selecionadoBot = <img className="player-img-card" src={props.fotoBot.img_url} alt="adicionarBot" />
            laneSimbolo = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        else {
            selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        return (
            <>
                {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                    setFotoBot={props.setFotoBot}
                /> : null}
                <div className="player-container">

                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    {selecionado}
                    {laneSimbolo}
                    {selecionadoBot}

                </div>
            </>
        );

    }

    function renderSup() {
        if (props.fotoSup.img_url !== undefined) {
            selecionadoSup = <img className="player-img-card" src={props.fotoSup.img_url} alt="adicionarSup" />
            laneSimbolo = <img className="lane-img" src={simbolo} alt="adicionar" />

        }
        else {
            selecionado = <img className="lane-img" src={simbolo} alt="adicionar" />
        }
        return (
            <>
                {showElement ? <Popup showOrHide={showOrHide} laneName={props.laneName} laneIcon={simbolo} laneNumber={props.laneNumber}
                    setFotoSup={props.setFotoSup}
                /> : null}
                <div className="player-container">

                </div>
                <div className="player-img-area" onClick={showOrHide}>
                    {selecionado}
                    {laneSimbolo}
                    {selecionadoSup}
                </div>
            </>
        );

    }


}

export default Lane;