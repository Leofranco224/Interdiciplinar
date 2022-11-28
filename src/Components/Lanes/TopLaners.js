import React, { useEffect, useState } from "react";



export default function JogadorTop(props) {

    let jogadores = []
    const data = { lane:  }

    console.log(fetch('https://cartolol-apirest.vercel.app/api/get_players_list', { method: 'GET', body: JSON.stringify(data) }));


    return (
        <div className="popup-area" onClick={props.showOrHide}>



        </div>


    );
}