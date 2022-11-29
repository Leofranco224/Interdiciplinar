import React from "react";
import { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import menuIcon from '../images/menuIcon.png';
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Perfil(props) {

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
            if(result.status == "true")
            {
                document.getElementById('username').value = result.username
                document.getElementById('email').value = result.email
            }
        }

    }


    useEffect(() => {
        checkSession();
      },[]);

    return (
        <div className="perfil-container">
            {showElement ? <Sidebar showOrHide={showOrHide} /> : null}

            <div className="top">
                <div className="icon-area">
                    <img className="icon-menu" src={menuIcon} alt="menu-hamburguer" showOrHide={showOrHide} onClick={showOrHide}/>
                </div>
                <div className="area-text-perfil">
                    <p className="escolha-text">Perfil</p>
                </div>
            </div>

            <div className="perfil">
                <form className="perfil-form mt-3">
                    <div className="perfil-top">
                        <h3 className="perfil-title mb-5">Atualizar perfil</h3>
                        <div className="perfil-imagem"></div>
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            id = "username"
                            type="text"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Nome de Usuário"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            id = "email"
                            type="email"
                            className="form-control mt-1 inpt-dark"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="form-group mt-3 inpt-perfil">
                        <input
                            type="password"
                            className="form-control mt-1 inpt-dark"
                            placeholder="Confirma Senha"
                        />
                    </div>
                    <div className="btn-area mt-3">
                        <button type="submit" className="btn btn-def">
                            Atualizar
                        </button>
                    </div>
                </form >
            </div>
        </div>
    );
}