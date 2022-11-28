import React from "react";
import JogadorCard from "./JogadorCard";



export default function Popup(props) {

    return (



        <div className="popup">
            <div className="lane-area mb-3">
                <img className="popup-img" src={props.laneIcon} alt="adicionar" />
                <p className="lane-name">{props.laneName}</p>
            </div>


            <JogadorCard showOrHide={props.showOrHide} lane={props.laneName} />

        </div>

    );
}