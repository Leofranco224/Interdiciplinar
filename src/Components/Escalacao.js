import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Lane from "./Lane";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Escalacao(props) {

    const [showElement, setShowElement] = useState(false);
    const navigate = useNavigate();

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    async function checkSession()
    {
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
        //Chamar API que verifica
        if(result.status == "false")
        {
            navigate("/");
        }
    }

    useEffect(() => {
        checkSession();
      },[]);

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
                    <Lane laneName="TOP" laneNumber={1} />
                    <Lane laneName="JUNGLE" laneNumber={2} />
                    <Lane laneName="MID" laneNumber={3} />
                    <Lane laneName="ADC" laneNumber={4} />
                    <Lane laneName="SUP" laneNumber={5} />
                </div>
                <div className="pontuacao-area">
                    <p className="pontuacao-text">Pontuação: <span className="pontos">73.5</span></p>
                </div>
            </div>
        </div>
    );
}