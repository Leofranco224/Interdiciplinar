import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Lane from "./Lane";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Escalacao(props) {

    const [showElement, setShowElement] = useState(false);
    const [pontosTot, setPontosTot] = useState('');

    const navigate = useNavigate();
    const cookies = new Cookies();
    const accessToken = cookies.get('access-token')
    //MANO ISSO AQUI É O JOGADOR INTEIRO IGNORA QUE 
    //TA ESCRITO SETFOTO NAO TEM FOTO PRA PEGAR A FOTO TEM QUE ACESSAR O OBJ
    const [fotoTop, setFotoTop] = useState({});
    const [fotoJungle, setFotoJungle] = useState({});
    const [fotoMid, setFotoMid] = useState({});
    const [fotoBot, setFotoBot] = useState({});
    const [fotoSup, setFotoSup] = useState({});

    async function setPontos() {
        let soma = 0;
        soma = parseInt(fotoTop['partida_atual'].pontos) + parseInt(fotoJungle['partida_atual'].pontos) +
            parseInt(fotoMid['partida_atual'].pontos) + parseInt(fotoBot['partida_atual'].pontos) + parseInt(fotoSup['partida_atual'].pontos);
        await update_user_lanes(soma);
        getPontos().then(data => { setPontosTot(data['ptos']) })
        console.log(pontosTot)

    }

    async function checkSession() {

        const res = await fetch('https://cartolol-apirest.vercel.app/api/check_session', {
            body: JSON.stringify({
                jwt: accessToken
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        })
        const result = await res.json()
        //Chamar API que verifica
        if (result.status == "false") {
            navigate("/");
        }
    }

    async function update_user_lanes(soma) {
        const res = await fetch('https://cartolol-apirest.vercel.app/api/update_user_lanes', {
            body: JSON.stringify({
                jwt: accessToken,
                ptos: soma,
                id_jogtop: fotoTop.id,
                id_jogjungle: fotoJungle.id,
                id_jogmid: fotoMid.id,
                id_jogbot: fotoBot.id,
                id_jogsup: fotoSup.id,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        })
    }


    async function getPontos() {
        const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_user_info', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ jwt: accessToken })
        });
        if (rawResponse.status === 200) {
            const content = await rawResponse.json();
            return content;
        }
    };

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }


    useEffect(() => {
        checkSession();
    }, []);

    return (
        <div className="escalacao-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                </div>
                <div className="area-text">
                    <p className="escolha-text">Escolha seu time</p>
                </div>
            </div>
            <div className="escalacao">
                <div className="escalacao-area">
                    <Lane laneName="TOP" laneNumber={1}
                        setFotoTop={setFotoTop}
                        fotoTop={fotoTop} />

                    <Lane laneName="JUNGLE" laneNumber={2}
                        setFotoJungle={setFotoJungle}
                        fotoJungle={fotoJungle} />

                    <Lane laneName="MID" laneNumber={3}
                        setFotoMid={setFotoMid} s
                        fotoMid={fotoMid} />

                    <Lane laneName="ADC" laneNumber={4}
                        setFotoBot={setFotoBot}
                        fotoBot={fotoBot} />

                    <Lane laneName="SUP" laneNumber={5}
                        setFotoSup={setFotoSup}
                        fotoSup={fotoSup} />
                </div>
                <button type="submit" className="btn btn-def" onClick={setPontos}>
                    Escalar
                </button>
                <div className="pontuacao-area">

                    <p className="pontuacao-text">Pontuação: <span className="pontos">{pontosTot}</span></p>
                </div>
            </div>
        </div>
    );
}