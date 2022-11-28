import React from "react";
import  { useNavigate } from 'react-router-dom'
import cartolaImg from '../images/cartolaImagem.png';
import imagemRandom from '../images/imagemRandom.jpg'

export default function Cadastro(props) {
  const [UserName, setUserName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Senha, setSenha] = React.useState('');
  const [ConfirmaSenha, setConfirmaSenha] = React.useState('');
  const navigate = useNavigate();

  const cadastraUsuario = async event => {
    event.preventDefault();
  
    const res = await fetch('https://cartolol-apirest.vercel.app/api/cadastrar', {
            body: JSON.stringify({
              username: event.target.username.value,
              email : event.target.email.value,
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
            navigate("/");
          }  
    }

    function validatePassword(){
      if(Senha != ConfirmaSenha) {
        console.log("senha diferente")
      } else {
        cadastraUsuario();
      }
    }

  return (
    <div className="Cadastro-form-container">
      <div className="main-content">
        <div className="top-bar mt-3">
          <img className="logo" src={cartolaImg} alt="logo" />
          <p className="main-title">Cartolol</p>
        </div>

        <div className="register-form-content mt-5">
          <form className="Auth-form">
            <div className="text-secondary">
              Entre em sua conta
            </div>
            <h3 className="Cadastro-form-title">Crie sua conta</h3>
            <div className="text-secondary d-flex mb-3">
              Já possui uma conta?
              <a href="/" className="redirect-login-text">Entrar</a>
            </div>
            <div className="form-group mt-3">
              <input
                id="username"
                type="text"
                className="form-control mt-1 inpt-dark"
                placeholder="Nome de Usuário"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                id="email"
                type="email"
                className="form-control mt-1 inpt-dark"
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
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
            <div className="form-group mt-3">
              <input
                id="confirm_password"
                type="password"
                className="form-control mt-1 inpt-dark"
                placeholder="Confirma Senha"
                onChange={e => setConfirmaSenha(e.target.value)}
              />
            </div>
            <div className="btn-area mt-3">
              <button type="submit" className="btn btn-def" onClick={validatePassword()}>
                Criar conta
              </button>
            </div>
          </form >
        </div>
      </div>

      <div className="image-content">
        <img className="img-random" src={imagemRandom} alt="background-image"/>
      </div>
    </div>
  );
}