import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import loading from '../images/loading-gif.gif';
import cartolaImg from '../images/cartolaImagem.png';
import foto0 from '../images/perfilFotos/0.png';
import foto1 from '../images/perfilFotos/1.png';
import foto2 from '../images/perfilFotos/2.png';
import foto3 from '../images/perfilFotos/3.png';
import foto4 from '../images/perfilFotos/4.png';
import foto5 from '../images/perfilFotos/5.png';
import foto6 from '../images/perfilFotos/6.png';
import foto7 from '../images/perfilFotos/7.png';
import foto8 from '../images/perfilFotos/8.png';
import foto9 from '../images/perfilFotos/9.png';
import foto10 from '../images/perfilFotos/10.png';
import foto11 from '../images/perfilFotos/11.png';

export default function Ranking(props) {
    document.title = "Cartolol - Ranking";
    const cookies = new Cookies();
    const accessToken = cookies.get('access-token')

    const [showElement, setShowElement] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [fotoPrimeiro, setFotoPrimeiro] = useState(loading);
    const [fotoSegundo, setFotoSegundo] = useState(loading);
    const [fotoTerceiro, setFotoTerceiro] = useState(loading);
    const navigate = useNavigate();

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    async function setRanking() {
        let data = await getUsuarios();
        await setUsuarios(data['ranking']);
        await setarFoto(data['ranking'])
    }

    async function getUsuarios() {
        const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_ranking', {
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

    function setarFoto(usuarios) {
        switch (usuarios[0]?.profile_pic) {
            case 0:
                setFotoPrimeiro(foto0)
                break;
            case 1:
                setFotoPrimeiro(foto1)
                break;
            case 2:
                setFotoPrimeiro(foto2)
                break;
            case 3:
                setFotoPrimeiro(foto3)
                break;
            case 4:
                setFotoPrimeiro(foto4)
                break;
            case 5:
                setFotoPrimeiro(foto5)
                break;
            case 6:
                setFotoPrimeiro(foto6)
                break;
            case 7:
                setFotoPrimeiro(foto7)
                break;
            case 8:
                setFotoPrimeiro(foto8)
                break;
            case 9:
                setFotoPrimeiro(foto9)
                break;
            case 10:
                setFotoPrimeiro(foto10)
                break;
            case 11:
                setFotoPrimeiro(foto11)
                break;
            default:
                setFotoPrimeiro(loading)
                break;
        }

        switch (usuarios[1]?.profile_pic) {
            case 0:
                setFotoSegundo(foto0)
                break;
            case 1:
                setFotoSegundo(foto1)
                break;
            case 2:
                setFotoSegundo(foto2)
                break;
            case 3:
                setFotoSegundo(foto3)
                break;
            case 4:
                setFotoSegundo(foto4)
                break;
            case 5:
                setFotoSegundo(foto5)
                break;
            case 6:
                setFotoSegundo(foto6)
                break;
            case 7:
                setFotoSegundo(foto7)
                break;
            case 8:
                setFotoSegundo(foto8)
                break;
            case 9:
                setFotoSegundo(foto9)
                break;
            case 10:
                setFotoSegundo(foto10)
                break;
            case 11:
                setFotoSegundo(foto11)
                break;
            default:
                setFotoSegundo(loading)
                break;
        }

        switch (usuarios[2]?.profile_pic) {
            case 0:
                setFotoTerceiro(foto0)
                break;
            case 1:
                setFotoTerceiro(foto1)
                break;
            case 2:
                setFotoTerceiro(foto2)
                break;
            case 3:
                setFotoTerceiro(foto3)
                break;
            case 4:
                setFotoTerceiro(foto4)
                break;
            case 5:
                setFotoTerceiro(foto5)
                break;
            case 6:
                setFotoTerceiro(foto6)
                break;
            case 7:
                setFotoTerceiro(foto7)
                break;
            case 8:
                setFotoTerceiro(foto8)
                break;
            case 9:
                setFotoTerceiro(foto9)
                break;
            case 10:
                setFotoTerceiro(foto10)
                break;
            case 11:
                setFotoTerceiro(foto11)
                break;
            default:
                setFotoTerceiro(loading)
                break;
        }
    }

    async function checkSession() {
        const cookies = new Cookies();
        const accessToken = cookies.get('access-token')
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
        if (result.status == "false") {
            navigate("/");
        }
    }

    useEffect(() => {
        checkSession();
        setRanking();
    }, []);

    return (
        <div className="ranking-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                <p className="escolha-text">Ranking</p>
                <img className="cartola-logo" src={cartolaImg} />
            </div>

            <div className="ranking">
                <div className="podio mb-5">
                    <div className="podio-group">
                        <p className="colocacao">2º LUGAR</p>
                        <div className="segundo-terceiro"><img className="foto-perfil" src={fotoSegundo} alt="foto"></img></div>
                        <p className="podio-name">{usuarios[1]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[1]?.ptos_totais} pts</p>
                    </div>

                    <div className="podio-group">
                        <p className="colocacao">1º LUGAR</p>
                        <div className="primeiro"><img className="foto-perfil" src={fotoPrimeiro} alt="foto"></img></div>
                        <p className="podio-name">{usuarios[0]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[0]?.ptos_totais} pts</p>
                    </div>

                    <div className="podio-group">
                        <p className="colocacao">3º LUGAR</p>
                        <div className="segundo-terceiro"><img className="foto-perfil" src={fotoTerceiro} alt="foto"></img></div>
                        <p className="podio-name">{usuarios[2]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[2]?.ptos_totais} pts</p>
                    </div>
                </div>

                <div className="table-area mb-5">
                    <table class="table">
                        <thead className="topo-tabela">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Jogador</th>
                                <th scope="col">Pontuação</th>
                            </tr>
                        </thead>
                        <tbody className="corpo-tabela">
                            {usuarios.slice(3).map((usuario, index) =>
                                <tr key={index}>
                                    <th >{index + 4}º</th>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.ptos_totais}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}