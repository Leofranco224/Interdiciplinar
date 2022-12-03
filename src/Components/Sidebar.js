import React from "react";
import { useState, useEffect } from "react";
import menuIcon from '../images/menuIcon.png';
import Cookies from 'universal-cookie';
import loading from '../images/loading-gif.gif';
import logoutIcon from '../images/logoutIcon.png';
import rankingIcon from '../images/rankingIcon.png';
import escalacaoIcon from '../images/escalacaoIcon.png';
import perfilIcon from '../images/perfilIcon.png';
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

function Sidebar(props) {

    const [dados, setDados] = useState('');
    const [foto, setFoto] = useState(loading);
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
            switch (content.profile_pic) {
                case 0:
                    setFoto(foto0)
                    break;
                case 1:
                    setFoto(foto1)
                    break;
                case 2:
                    setFoto(foto2)
                    break;
                case 3:
                    setFoto(foto3)
                    break;
                case 4:
                    setFoto(foto4)
                    break;
                case 5:
                    setFoto(foto5)
                    break;
                case 6:
                    setFoto(foto6)
                    break;
                case 7:
                    setFoto(foto7)
                    break;
                case 8:
                    setFoto(foto8)
                    break;
                case 9:
                    setFoto(foto9)
                    break;
                case 10:
                    setFoto(foto10)
                    break;
                case 11:
                    setFoto(foto11)
                    break;
                default:
                    setFoto(loading)
                    break;
            }
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
                    <div className="side-image"><img className="foto-side" src={foto} alt="foto"></img></div>
                    <p className="side-name">{dados}</p>
                </div>
                <img className="close-btn" src={menuIcon} alt="menu-hamburguer" onClick={props.showOrHide} />
            </div>
            <div className="side-itens">
                <a className="side-option" href="/escalacao"><span className="side-text">Escalação</span><img className="escalacao-icon" src={escalacaoIcon} alt="escalacao"/></a>
                <a className="side-option" href="/ranking"><span className="side-text">Ranking</span><img className="ranking-icon" src={rankingIcon} alt="ranking"/></a>
                <a className="side-option" href="/perfil"><span className="side-text">Perfil</span><img className="escalacao-icon" src={perfilIcon} alt="perfil"/></a>
                <a className="side-option" href="/"><span className="side-text">Sair</span><img className="logout-icon" src={logoutIcon} alt="sair"/></a>
            </div>
        </div>
    );
}

export default Sidebar;