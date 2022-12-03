import React from "react";
import { useEffect, useState } from "react";
import JogadorCard from "./JogadorCard";
import fecharIcon from '../images/botao-fechar.png'

async function getJogadores(number) {
    const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_players_list', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lane: number })
    });
    if (rawResponse.status === 200) {
        const content = await rawResponse.json();
        return content;
    }
};

export default function Popup(props) {

    const [jogadores, setJogadores] = useState([{}]);

    useEffect(() => {
        renderJogadores();
    }, [])

    function renderJogadores() {
        getJogadores(props.laneNumber).then(data => {
            setJogadores(data['players']);
        })
    }


    if (jogadores !== undefined) {
        console.log(jogadores)
    }

    return (
        <div className="popup">
            <div className="lane-area mb-3">
                <img className="popup-img" src={props.laneIcon} alt="adicionar" />
                <p className="lane-name">{props.laneName}</p>
                <img src={fecharIcon} className="botao-fechar" onClick={props.showOrHide}/>
            </div>

            {jogadores.map((jogador, index) =>

                <JogadorCard showOrHide={props.showOrHide} lane={props.laneName} jogador={jogador} setFotoTop={props.setFotoTop}
                    setFotoJungle={props.setFotoJungle} setFotoMid={props.setFotoMid} setFotoBot={props.setFotoBot} setFotoSup={props.setFotoSup} />

            )}

        </div>
    );
}