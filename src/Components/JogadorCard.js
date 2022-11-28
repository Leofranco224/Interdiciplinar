import React from "react";
import JogadorBot from "./Lanes/BotLaners";
import JogadorJungle from "./Lanes/JungleLaners";
import JogadorMid from "./Lanes/MidLaners";
import JogadorSupport from "./Lanes/SupportLaners";
import JogadorTop from "./Lanes/TopLaners";


export default function JogadorCard(props) {

    console.log("cheguei aqui")

    const lane = props.lane
    switch (lane) {
        case 'TOP':
            return (<JogadorTop showOrHide={props.showOrHide} />);
        case 'JUNGLE':
            return (<JogadorJungle showOrHide={props.showOrHide} />);
        case 'MID':
            return (<JogadorMid showOrHide={props.showOrHide} />);
        case 'ADC':
            return (<JogadorBot showOrHide={props.showOrHide} />);
        case 'SUP':
            return (<JogadorSupport showOrHide={props.showOrHide} />);

    }
}