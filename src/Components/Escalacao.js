import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Lane from "./Lane";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import emAlta from '../images/trendUp.png'
import emBaixa from '../images/trendDown.png'
import coin from '../images/coin.gif'
import cartolaImg from '../images/cartolaImagem.png';
import loading from '../images/loading-gif.gif';

export default function Escalacao(props) {
    document.title = "Cartolol - Escalação";
    const [pontosTotAnterior, setPontosTotAnterior] = useState('0');
    const navigate = useNavigate();
    const cookies = new Cookies();
    const accessToken = cookies.get('access-token')
    const [status, setStatus] = useState(false);
    //MANO ISSO AQUI É O JOGADOR INTEIRO IGNORA QUE 
    //TA ESCRITO SETFOTO NAO TEM FOTO PRA PEGAR A FOTO TEM QUE ACESSAR O OBJ
    const [showElement, setShowElement] = useState(false);
    const [pontosTot, setPontosTot] = useState('0');
    const [fotoTop, setFotoTop] = useState({});
    const [fotoJungle, setFotoJungle] = useState({});
    const [fotoMid, setFotoMid] = useState({});
    const [fotoBot, setFotoBot] = useState({});
    const [fotoSup, setFotoSup] = useState({});

    let simbolos = 0;
    let botaoPontos, pontuacaoTotal, coinGif = '';

    async function getMercadoStatus(fromEffect) {
        const res = await fetch('https://cartolol-apirest.vercel.app/api/get_mercado_status', {
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
        console.log(result)

        if (result.status == "false") {
            return false
        }
        else {
            if (result.is_fechado == 0) {
                return true
            }
            else {
                navigate("/Escalacao");
                return false

            }
        }

    }

    async function user() {
        const boolStatus = await getMercadoStatus()
        setStatus(boolStatus)

        const user = await getPontos()
        console.log(user)
        if (parseInt(user.flag) == 1) {
            setFotoTop(user.id_jogtop)
            setFotoJungle(user.id_jogjungle)
            setFotoMid(user.id_jogmid)
            setFotoBot(user.id_jogbot)
            setFotoSup(user.id_jogsup)
            setPontosTot(user.ptos)
            setPontosTotAnterior(user.last_ptos)
        }
    }

    function startLoading(id) {
        document.getElementById('loadinganim').style.display = 'inline-block'
        document.getElementById(id).innerHTML = ""
    }

    async function setPontos() {

        startLoading("btntext")
        let soma = 0;

        soma = parseInt(fotoTop['partida_atual'].pontos) + parseInt(fotoJungle['partida_atual'].pontos) +
            parseInt(fotoMid['partida_atual'].pontos) + parseInt(fotoBot['partida_atual'].pontos) + parseInt(fotoSup['partida_atual'].pontos);
        await update_user_lanes(soma);
        getPontos().then(data => { setPontosTot(data['ptos']) })
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
    };

    async function update_user_lanes(soma) {
        const res = await fetch('https://cartolol-apirest.vercel.app/api/update_user_lanes', {
            body: JSON.stringify({
                jwt: accessToken,
                ptos: 0,
                flag: 1,
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

        const result = await res.json()
        if (result.status == "false") {
            console.log(result)
            window.location.reload();
        }
        document.getElementById('loadinganim').style.display = 'none'
        document.getElementById('btntext').innerHTML = "ESCALADO!"
    };

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
            return Promise.resolve(content);
        }
    };

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    };

    useEffect(() => {
        checkSession();
        user();
    }, []);

    console.log(status)
    if (status) {
        if (fotoTop.img_url === undefined || fotoJungle.img_url === undefined || fotoMid.img_url === undefined || fotoBot.img_url === undefined || fotoSup.img_url === undefined) {
            botaoPontos = <button type="submit" className="btn btn-escalar-desativado" >
                ESCALAR
            </button>
        }
        else {
            botaoPontos = <button type="submit" className="btn btn-escalar" onClick={setPontos}>
                <div id="btntext">ESCALAR</div>
                <img id="loadinganim" className="loading-btn-escalacao" src={loading} alt="foto" onLoad={(event) => event.target.style.display = 'none'}></img>
                
            </button>
        }


        if (pontosTot > pontosTotAnterior) {
            simbolos = <img className="chart" src={emAlta} alt="emAlta" />
        }
        else {
            simbolos = <img className="chart" src={emBaixa} alt="emBaixa" />
        }
        if (pontosTot == pontosTotAnterior) {
            simbolos = ''
        }

        pontuacaoTotal = <p className="pontuacao-text"><span className="pontos">{pontosTot}</span></p>
        coinGif = <img className="coin" src={coin} />
    }
    else {
        simbolos = <p className="pontuacao-text"><span className="pontos">Mercado Fechado</span></p>
        pontuacaoTotal = ''
        botaoPontos = ''
        coinGif = ''
    }

    return (
        <div className="escalacao-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                <p className="escolha-text">Escolha seu time</p>
                <img className="cartola-logo" src={cartolaImg} />
            </div>

            <div className="escalacao">
                <div className="pontuacao-area">
                    {simbolos}
                    {pontuacaoTotal}
                    {coinGif}
                </div>
                <div className="escalacao-area">
                    <Lane laneName="TOP" laneNumber={1}
                        setFotoTop={setFotoTop}
                        fotoTop={fotoTop} mercado={status} />

                    <Lane laneName="JUNGLE" laneNumber={2}
                        setFotoJungle={setFotoJungle}
                        fotoJungle={fotoJungle} mercado={status} />

                    <Lane laneName="MID" laneNumber={3}
                        setFotoMid={setFotoMid}
                        fotoMid={fotoMid} mercado={status} />

                    <Lane laneName="ADC" laneNumber={4}
                        setFotoBot={setFotoBot}
                        fotoBot={fotoBot} mercado={status} />

                    <Lane laneName="SUP" laneNumber={5}
                        setFotoSup={setFotoSup}
                        fotoSup={fotoSup} mercado={status} />
                </div>

                {botaoPontos}
            </div>
        </div>
    );
}
