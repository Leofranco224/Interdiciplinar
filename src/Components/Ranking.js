import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Ranking(props) {

    const cookies = new Cookies();
    const accessToken = cookies.get('access-token')

    const [showElement, setShowElement] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
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
        getUsuarios().then(data => { setUsuarios(data['ranking']); })
    }

    // console.log(usuarios)
    // console.log(usuarios[0]?.username)


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
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                </div>
                <div className="area-text">
                    <p className="escolha-text">Ranking de jogadores</p>
                </div>
            </div>

            <div className="ranking">
                <div className="podio mb-5">
                    <div className="podio-group">
                        <p className="colocacao">2º LUGAR</p>
                        <div className="segundo-terceiro"></div>
                        <p className="podio-name">{usuarios[1]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[1]?.ptos} pts</p>
                    </div>

                    <div className="podio-group">
                        <p className="colocacao">1º LUGAR</p>
                        <div className="primeiro"></div>
                        <p className="podio-name">{usuarios[0]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[0]?.ptos} pts</p>
                    </div>

                    <div className="podio-group">
                        <p className="colocacao">3º LUGAR</p>
                        <div className="segundo-terceiro"></div>
                        <p className="podio-name">{usuarios[2]?.username}</p>
                        <p className="pontuacao-podio">{usuarios[2]?.ptos} pts</p>
                    </div>
                </div>

                <div className="table-area">
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
                                    <th >{index+4}</th>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.ptos}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}