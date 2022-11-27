import React from "react";

export default function (props){
    return (
        <div className="Cadastro-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
               <div className="text-secondary">
               Entre em sua conta
               </div>
              <h3 className="Cadastro-form-title">Crie sua Conta</h3>
              <div className="text-secondary d-flex">
                Já possui uma conta?
                    <a href= "./Auth">Entrar</a>
                </div>
              <div className="form-group mt-3">
                <input
                  type="email"
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
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-default">
                  Criar Conta
                </button>
              </div>
            </div>
          </form>
        </div>
    );
}

    