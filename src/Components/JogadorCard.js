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
            return (<JogadorTop showOrHide={props.showOrHide} jogador={props.jogador} setFotoTop={props.setFotoTop} />);
        case 'JUNGLE':
            return (<JogadorJungle showOrHide={props.showOrHide} jogador={props.jogador} setFotoJungle={props.setFotoJungle} />);
        case 'MID':
            return (<JogadorMid showOrHide={props.showOrHide} jogador={props.jogador} setFotoMid={props.setFotoMid} />);
        case 'ADC':
            return (<JogadorBot showOrHide={props.showOrHide} jogador={props.jogador} setFotoBot={props.setFotoBot} />);
        case 'SUP':
            return (<JogadorSupport showOrHide={props.showOrHide} jogador={props.jogador} setFotoSup={props.setFotoSup} />);

    }
}