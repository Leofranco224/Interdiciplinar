import React from "react";
import { useNavigate } from "react-router-dom";


export async function login(username, password) {
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

export async function cadastro(username, email, password) {
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

export async function mercadoStatus(accessToken) {
  const res = await fetch('https://cartolol-apirest.vercel.app/api/get_mercado_status', {
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

  if (result.status == "false") {
    return false
  }
  else {
    if (result.is_fechado == 0) {
      return true
    }
    else {
      Navigate("/Escalacao");
      return false

    }
  }

}

export async function checkSession(accessToken) {
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
    Navigate("/");
  }
  else
    return true
}
export async function getPontos(accessToken, cookies) {
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
    const age = 60 * 60 * 24 * 30 * 1000;
    cookies.set("usuarioImagem", content.profile_pic, {
      path: "/",
      maxAge: age,
      sameSite: true,
    })
    cookies.set("nickname", content.username, {
      path: "/",
      maxAge: age,
      sameSite: true,
    })

    return Promise.resolve(content);
  }
};

export async function updateUserLanes(accessToken, fotos) {
  const res = await fetch('https://cartolol-apirest.vercel.app/api/update_user_lanes', {
    body: JSON.stringify({
      jwt: accessToken,
      ptos: 0,
      flag: 1,
      id_jogtop: fotos.fotoTop.id,
      id_jogjungle: fotos.fotoJungle.id,
      id_jogmid: fotos.fotoMid.id,
      id_jogbot: fotos.fotoBot.id,
      id_jogsup: fotos.fotoSup.id,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    method: 'POST'
  })

  return res.json()
}

export async function getUserInfo(accessToken) {
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

  return res.json()
}

export async function updateUserInfo(accessToken, email, password) {
  const res = await fetch('https://cartolol-apirest.vercel.app/api/update_user_info', {
    body: JSON.stringify({
      jwt: accessToken,
      email: email,
      newpass: password
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    method: 'POST'
  })
  return res.json()
}

export async function updateProfilePic(accessToken, picId, cookies) {
  const res = await fetch('https://cartolol-apirest.vercel.app/api/update_profile_pic', {
    body: JSON.stringify({
      jwt: accessToken,
      pic_id: picId,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    method: 'POST'
  })
  const age = 60 * 60 * 24 * 30 * 1000;
  cookies.set("usuarioImagem", picId, {
    path: "/",
    maxAge: age,
    sameSite: true,
  })
}

export async function getJogadores(number) {
  const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_players_list', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ lane: number })
  });
  if (rawResponse.status === 200) {
    const content = await rawResponse.json();
    return content;
  }

}

export async function getUsuarios(accessToken) {
  const rawResponse = await fetch('https://cartolol-apirest.vercel.app/api/get_ranking', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ jwt: accessToken })
  });
  if (rawResponse.status === 200) {
    const content = await rawResponse.json();
    return content;
  }
}
function Navigate(url) {
  const navigate = useNavigate();
  navigate(url)
}