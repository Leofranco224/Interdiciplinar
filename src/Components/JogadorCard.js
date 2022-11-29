import React from "react";
import JogadorBot from "./Lanes/BotLaners";
import JogadorJungle from "./Lanes/JungleLaners";
import JogadorMid from "./Lanes/MidLaners";
import JogadorSupport from "./Lanes/SupportLanes";
import JogadorTop from "./Lanes/TopLaners";
export default function JogadorCard(props) {


    const lane = props.lane
    switch (lane) {
        case 'TOP':
            return (<JogadorTop showOrHide={props.showOrHide} jogador={props.jogador} />);
        case 'JUNGLE':
            return (<JogadorJungle showOrHide={props.showOrHide} jogador={props.jogador} />);
        case 'MID':
            return (<JogadorMid showOrHide={props.showOrHide} jogador={props.jogador} />);
        case 'ADC':
            return (<JogadorBot showOrHide={props.showOrHide} jogador={props.jogador} />);
        case 'SUP':
            return (<JogadorSupport showOrHide={props.showOrHide} jogador={props.jogador} />);

    }
}