import React, { useEffect, useState } from "react";
import placeholder from '../../images/placeholderJogador.png';


async function getJogadores() {
    const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_players_list', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lane: 1 })
    });
    if (rawResponse.status === 200) {
        const content = await rawResponse.json();
        return content;
    }
};

export default function JogadorTop(props) {
    // const [nameOrID, setNameOrID] = useState('1');
    // const [pokemon, setPokemon] = useState('');

    // useEffect(() => {
    //     renderPokemon();
    // }, [])

    // function renderPokemon() {
    //     getPokemon(searchPokemon).then(data => {
    //         setNameOrID('');
    //         if (data) {
    //             img = true;
    //             searchPokemon = data.id;
    //             setPokemon({
    //                 name: data.name,
    //                 number: `${data.id} - `,
    //                 image: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
    //             });
    //         } else {
    //             img = false;
    //             setPokemon({
    //                 name: 'Not found :C',
    //                 number: '',
    //                 image: '#',
    //             });
    //         }
    //     })
    // }

    const [jogador, setJogador] = useState([{}]);

    useEffect(() => {
        renderJogador();
    }, [])

    function renderJogador() {
        getJogadores().then(data => {

            setJogador(data);
        })
    }

    console.log("ARRAY JOGADOR:", jogador['players'])
    return (
        <div className="popup-area" onClick={props.showOrHide}>

            <img className="player-img" src={placeholder}></img>
            <div className="player-info">
                <p className="player-name" > Name</p>
                <p className="player-team" > Team</p>
                <p className="player-stats" > Stats</p>
            </div>
            <div className="player-match-info">
                <p className="player-name" > CS </p>
                <p className="player-team" > K/D/A</p>
            </div>

            <div className="player-total-points">

                <p className="player-points" > 8 </p>

            </div>
        </div>
    );
}