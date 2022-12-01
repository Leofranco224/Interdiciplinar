import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Cookies from 'universal-cookie';

function Sidebar(props) {

    const [dados, setDados] = useState('');
    const cookies = new Cookies();
    const accessToken = cookies.get('access-token');

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
    }

    async function getUsuario() {
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
            setDados(content.username);
            return content;
        }
    };

    useEffect(() => {
        checkSession();
        getUsuario();
    }, []);

    return (
        <div id="sideNav" class="sidenav">
            <div className="side-top">
                <div className="side-user">
                    <div className="side-image"></div>
                    <p className="side-name">{dados}</p>
                </div>
                <img className="close-btn" src={menuIcon} alt="menu-hamburguer" onClick={props.showOrHide} />
            </div>
            <div className="side-itens">
                <a className="side-option" href="/Perfil"><span>Perfil</span></a>
                <a className="side-option" href="/Escalacao"><span>Escalação</span></a>
                <a className="side-option" href="/Ranking"><span>Ranking</span></a>
                <a className="side-option" href="/"><span>Sair</span></a>
            </div>
        </div>
    );
}

export default Sidebar;