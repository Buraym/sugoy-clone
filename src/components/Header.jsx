import '../styles/Header.css';
import Logo from '../assets/logo-sugoy.png';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';


import {React, useState, useEffect } from 'react';
function Header(){

    const [contaCarrinho, setContaCarrinho] = useState(3);
    const [isLogged, setIsLogged] = useState(true);

    var numeroCarrinho = window.localStorage.getItem('carrinho')
    numeroCarrinho = numeroCarrinho == null || JSON.parse(numeroCarrinho).length == 0 ? 0 : JSON.parse(numeroCarrinho).length;
    
    
    return (
        <header className="header">
            <div className="header-aba-1">
                <div className="header-caixa-logo">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="header-caixa-topicos">
                    <div className="header-topico">
                        <label className="header-topico-texto">Mais Vendidos</label>
                    </div> 
                    <div className="header-topico">
                        <label className="header-topico-texto">Novidades</label>
                    </div> 
                    <div className="header-topico">
                        <label className="header-topico-texto">Destaques</label>
                    </div>
                    <div className="header-topico">
                        <label className="header-topico-texto">Marcas</label>
                    </div>
                </div>
                <div className="header-caixa-perfil">
                    <div className="header-pesquisa-caixa">
                        <FaSearch  className="header-pesquisa-icone"/>
                        <input className="header-pesquisa-input"/>
                    </div>
                    <div>
                        {
                            isLogged ? <BiLogIn className="header-login"/> : <CgProfile className="header-login"/>
                        }
                    </div>
                    <div>
                        <FaShoppingCart className="header-carrinho"/>{ numeroCarrinho != 0 ? <div className="header-carrinho-numero">{numeroCarrinho}</div> : null }
                    </div>
                    <div>
                        <AiOutlineHeart className="header-favoritos"/>
                    </div>
                </div>
            </div>
            <div className="header-aba-2"></div>
        </header>
    );
}


export default Header;