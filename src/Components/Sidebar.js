import React from "react";
import menuIcon from '../images/menuIcon.png';

function Sidebar(props) {
    return (
        <div id="sideNav" class="sidenav">
            <div className="side-top">
                <div className="side-user">
                    <div className="side-image"></div>
                    <p className="side-name">UserPadrao</p>
                </div>
                <img className="close-btn" src={menuIcon} alt="menu-hamburguer" onClick={props.showOrHide} />
            </div>
            <div className="side-itens">
                <a className="side-option" href="/Perfil"><span>Perfil</span></a>
                <a className="side-option" href="/Escalacao"><span>Escalação</span></a>
                <a className="side-option" href="/Ranking"><span>Ranking</span></a>
                <a className="side-option" href="/"><span>Sair</span></a>
            </div>
        </div>
    );
}

export default Sidebar;