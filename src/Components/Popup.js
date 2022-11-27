import React from "react";
import JogadorCard from "./JogadorCard";

export default function Popup(props) {

    return (
        <div className="popup">
            <div className="lane-area mb-3">
                <div className="lane-img"></div>
                <p className="lane-name">TOP</p>
                <p className="btn-fechar" onClick={props.showOrHide}>Fechar</p>
            </div>

            <JogadorCard showOrHide={props.showOrHide}/>
            <JogadorCard showOrHide={props.showOrHide}/>
            <JogadorCard showOrHide={props.showOrHide}/>
            <JogadorCard showOrHide={props.showOrHide}/>
        </div>
    );
}