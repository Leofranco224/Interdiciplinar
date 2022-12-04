import React from "react";
import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import menuIcon from '../images/menuIcon.png';
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


export default function Perfil(props) {

    const [showElement, setShowElement] = useState(false);
    const [showFotos, setShowFotos] = useState(false);
    const [foto, setFoto] = useState(loading);
    const navigate = useNavigate();

    function showOrHide() {
        if (showElement) {
            setShowElement(false);
        }
        else {
            setShowElement(true);
        }
    }

    function showOrHideFoto() {
        if (showFotos) {
            setShowFotos(false);
        }
        else {
            setShowFotos(true);
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
        //Chamar API que verifica
        if (result.status == "false") {
            navigate("/");
        }
        else //Carregar as info do usuario
        {
            const res = await fetch('https://cartolol-apirest.vercel.app/api/get_user_info', {
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
            if (result.status == "true") {
                switch (result.profile_pic) {
                    case 0:
                        console.log("cheguei 0")
                        setFoto(foto0)
                        break;
                    case 1:
                        console.log("cheguei 1")
                        setFoto(foto1)
                        break;
                    case 2:
                        console.log("cheguei 2")
                        setFoto(foto2)
                        break;
                    case 3:
                        console.log("cheguei 3")
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
                document.getElementById('username').value = result.username
                document.getElementById('email').value = result.email
            }
        }

    }

    useEffect(() => {
        checkSession();
    }, []);

    function startLoading(id)
    {
        document.getElementById('loadinganim').style.display = 'inline-block'
        document.getElementById(id).innerHTML = ""
    }

    const attPerfil = async event => {
        event.preventDefault();
        startLoading("btntext")
        document.getElementById('msngerro').innerHTML = ""
        if(event.target.email.value <= 0)
        {
            document.getElementById('msngerro').innerHTML = "Campo E-mail não pode estar vazio!"
            document.getElementById('loadinganim').style.display = 'none'
            document.getElementById('btntext').innerHTML = "Atualizar"
            return;
        }
        if (event.target.pass.value !== event.target.checkpass.value) {
            document.getElementById('msngerro').innerHTML = "As senhas inseridas não são iguais."
            document.getElementById('loadinganim').style.display = 'none'
            document.getElementById('btntext').innerHTML = "Atualizar"
            return;
        }

        const cookies = new Cookies();
        const accessToken = cookies.get('access-token')
        const res = await fetch('https://cartolol-apirest.vercel.app/api/update_user_info', {
            body: JSON.stringify({
                jwt: accessToken,
                email: event.target.email.value,
                newpass: event.target.pass.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        })
        const result = await res.json()
        console.log(result.status)
        if (result.status == "true") {
            window.location.reload();
        }
    }

    const definirFoto = (aux, id) => async (event) => {
        showOrHideFoto();
        setFoto(aux)
        const cookies = new Cookies();
        const accessToken = cookies.get('access-token')
        const res = await fetch('https://cartolol-apirest.vercel.app/api/update_profile_pic', {
            body: JSON.stringify({
                jwt: accessToken,
                pic_id: id,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        })
        const result = await res.json()
    }

    return (
        <div className="perfil-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide} />
                <p className="escolha-text">Perfil</p>
                <img className="cartola-logo" src={cartolaImg} alt="logo"/>
            </div>

            <div className="perfil">
                <form className="perfil-form" onSubmit={attPerfil}>

                    <div className="perfil-top">
                        <h3 className="perfil-title mb-5 mt-5">Atualizar perfil</h3>
                        <div className="perfil-imagem mt-4" onClick={showOrHideFoto}><img className="foto-perfil" src={foto} alt="foto"></img></div>
                    </div>

                    {showFotos ?
                        <div className="escolha-foto-area mt-3">
                            <div id="0" className="foto-box" onClick={definirFoto(foto0, 0)}>
                                <img className="foto-perfil-escolher" src={foto0} alt="icone"/>
                            </div>
                            <div id="1" className="foto-box" onClick={definirFoto(foto1, 1)}>
                                <img className="foto-perfil-escolher" src={foto1} alt="icone"/>
                            </div>
                            <div id="2" className="foto-box" onClick={definirFoto(foto2, 2)}>
                                <img className="foto-perfil-escolher" src={foto2} alt="icone"/>
                            </div>
                            <div id="3" className="foto-box" onClick={definirFoto(foto3, 3)}>
                                <img className="foto-perfil-escolher" src={foto3} alt="icone"/>
                            </div>
                            <div id="4" className="foto-box" onClick={definirFoto(foto4, 4)}>
                                <img className="foto-perfil-escolher" src={foto4} alt="icone"/>
                            </div>
                            <div id="5" className="foto-box" onClick={definirFoto(foto5, 5)}>
                                <img className="foto-perfil-escolher" src={foto5} alt="icone"/>
                            </div>
                            <div id="6" className="foto-box" onClick={definirFoto(foto6, 6)}>
                                <img className="foto-perfil-escolher" src={foto6} alt="icone"/>
                            </div>
                            <div id="7" className="foto-box" onClick={definirFoto(foto7, 7)}>
                                <img className="foto-perfil-escolher" src={foto7} alt="icone"/>
                            </div>
                            <div id="8" className="foto-box" onClick={definirFoto(foto8, 8)}>
                                <img className="foto-perfil-escolher" src={foto8} alt="icone"/>
                            </div>
                            <div id="1" className="foto-box" onClick={definirFoto(foto9, 9)}>
                                <img className="foto-perfil-escolher" src={foto9} alt="icone"/>
                            </div>
                            <div id="1" className="foto-box" onClick={definirFoto(foto10, 10)}>
                                <img className="foto-perfil-escolher" src={foto10} alt="icone"/>
                            </div>
                            <div id="1" className="foto-box" onClick={definirFoto(foto11, 11)}>
                                <img className="foto-perfil-escolher" src={foto11} alt="icone"/>
                            </div>
                        </div>
                        : null}

                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            readOnly
                            id="username"
                            type="text"
                            className="form-control mt-1 username-inpt"
                            placeholder="Nome de Usuário"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            id="email"
                            type="email"
                            className="form-control mt-1 inpt-dark"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            id="pass"
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            id="checkpass"
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Confirma Senha"
                        />
                    </div>
                    <div id="msngerro" className="msg-erro mt-2"></div>
                    <div className="btn-area mt-3">
                        <button  type="submit" className="btn btn-def">
                            <div id="btntext">Atualizar</div>
                            <img id="loadinganim" className="loading-btn" src={loading} alt="foto" onLoad={(event) => event.target.style.display = 'none'}></img>
                            
                        </button>
                    </div>
                </form >
            </div>
        </div>
    );
}