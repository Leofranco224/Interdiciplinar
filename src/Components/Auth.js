import React from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import cartolaImg from '../images/cartolaImagem.png';
import loading from '../images/loading-gif.gif';

export default function Auth(props) {
  document.title = "Cartolol - Login";
  const [erro, setErro] = React.useState('')
  const cookies = new Cookies();
  const navigate = useNavigate();

  const logaUsuario = async event => {
    event.preventDefault();
    document.getElementById('loadinganim').style.display = 'inline-block'
    document.getElementById('btntext').innerHTML = ""
    setErro('')
    const res = await fetch('https://cartolol-apirest.vercel.app/api/logar', {
      body: JSON.stringify({
        username: event.target.username.value,
        senha: event.target.password.value
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
      //Setar cookies de autenticação
      const age = 60 * 60 * 24 * 30 * 1000 //Similar ao Remember Me (da pra implementar isso se quiser)
      cookies.set("access-token", result.jwt, {
        path: "/",
        maxAge: age,
        sameSite: true,
      })

      navigate("/escalacao");
    }
    else {
      setErro(<p className="msg-erro">Senha ou nome de usuário inválido</p>)
      document.getElementById('loadinganim').style.display = 'none'
      document.getElementById('btntext').innerHTML = "Entrar"
    }
  }

  return (
    
    <div className="Auth-form-container">

      <div className="Auth-form-content">
        <div className="top-login">
          <img className="logo-login" src={cartolaImg} alt="logo" />
          <p className="titulo-login">Cartolol</p>
        </div>

        <div className="form-container">
          <form className="Auth-form" onSubmit={logaUsuario}>
            <h3 className="Auth-form-title">Bem vindo de volta!</h3>
            <div className="text-center text-secondary">
              Entre em sua conta
            </div>

            <div className="form-group mt-3">
              <input
                id="username"
                type="text"
                className="form-login-control mt-1 inpt-dark"
                placeholder="Usuário"
              />
            </div>
            <div className="form-group mt-3">
              <input
                id="password"
                type="password"
                className="form-login-control mt-1 inpt-dark"
                placeholder="Senha"
              />
            </div>
            <div class="form-check mt-1">
              <input class="form-check-input inpt-dark inpt-check" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label text-secondary" for="flexCheckDefault">
                Lembrar-me
              </label>
            </div>

            <div className="erro-box">{erro}</div>

            <div className="btn-area mt-4">

              <button type="submit" className="btn btn-def">
                <div id="btntext">Entrar</div>
                <img id="loadinganim" className="loading-btn" src={loading} alt="foto" onLoad={(event) => event.target.style.display = 'none'}></img>
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="Auth-form-Cadastro">
        <div className="cadastro-area">
          <h3 className="main-text">Novo Aqui?</h3>
          <p className="second-text">Crie sua conta e comece a jogar</p>
          <a href="/Cadastro" className="btn btn-light btn-cadastro mt-4">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
