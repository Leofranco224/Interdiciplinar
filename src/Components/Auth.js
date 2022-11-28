import React from "react";
import  { useNavigate } from 'react-router-dom'

const urlApi = "https://cartolol-apirest.vercel.app/api/logar";


export default function Auth (props) {
  const [UserName, setUserName] = React.useState('');
  const [Senha, setSenha] = React.useState('');
  const navigate = useNavigate();

  const logaUsuario = async event => {
    event.preventDefault();
  
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
          if (result.status == "true"){ 
            navigate("/Escalacao");
          }  
  }
  

  return (
    <div className="Auth-form-container">
      <div className="Auth-form-content">
        <form className="Auth-form" onSubmit={logaUsuario}>
          <h3 className="Auth-form-title">Bem vindo de volta!</h3>
          <div className="text-center text-secondary">
            Entre em sua conta
          </div>
          <div className="form-group mt-3">
            <input
              id="username"
              type="text"
              className="form-control mt-1 inpt-dark"
              placeholder="Usuário"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              id="password"
              type="password"
              className="form-control mt-1 inpt-dark"
              placeholder="Senha"
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div class="form-check mt-1">
            <input class="form-check-input inpt-dark inpt-check" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label text-secondary" for="flexCheckDefault">
              lembrar-me
            </label>
          </div>
          <div className="btn-area mt-3">
            <button type="submit" className="btn btn-def">
              Entrar
            </button>
          </div>
        </form>
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

