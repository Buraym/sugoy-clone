import '../styles/Header.css';
import Logo from '../assets/logo-sugoy.png';
import { FaSearch } from 'react-icons/fa';
//import { FaBars } from 'react-icons/fa';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { ImTruck } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';


import {React, useState } from 'react';
function Header(){

    const [contaCarrinho, setContaCarrinho] = useState('0,00');
    const [isLogged, setIsLogged] = useState(true);
    
    return (
        <header className="header">
            <div className="header-aviso">
                <ImTruck className="header-aviso-icone"/>
                <label className="header-aviso-texto">ESTAMOS ENVIANDO NORMALMENTE PARA TODO O BRASIL</label>
            </div>
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
                        <FaShoppingCart className="header-carrinho"/>
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