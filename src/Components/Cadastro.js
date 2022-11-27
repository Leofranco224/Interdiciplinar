import React from "react";
import cartolaImg from '../images/cartolaImagem.png';
import imagemRandom from '../images/imagemRandom.jpg'

export default function Cadastro(props) {
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
                type="text"
                className="form-control mt-1 inpt-dark"
                placeholder="Nome de Usuário"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1 inpt-dark"
                placeholder="E-mail"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1 inpt-dark"
                placeholder="Senha"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1 inpt-dark"
                placeholder="Confirma Senha"
              />
            </div>
            <div className="btn-area mt-3">
              <button type="submit" className="btn btn-def">
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