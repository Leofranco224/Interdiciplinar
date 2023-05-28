import React from "react";

export async function login(username, password){
    const res = await fetch('https://cartolol-apirest.vercel.app/api/logar', {
        body: JSON.stringify({
          username: username,
          senha: password
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        method: 'POST'
      })
    return res.json()
}

export async function cadastro(username,email,password){
    const res = await fetch('https://cartolol-apirest.vercel.app/api/cadastrar', {
        body: JSON.stringify({
          username: username,
          email: email,
          senha: password
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        method: 'POST'
      })
      return res.json()
}