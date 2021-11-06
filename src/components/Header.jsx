import '../styles/Header.css';
import Logo from '../assets/logo-sugoy.png';
import { FaBAiOutlineSearcheer } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoChatbubblesOutline } from 'react-icons/io';

import {React, useState } from 'react';
function Header(){

    const [contaCarrinho, setContaCarrinho] = useState('0,00');
    
    return (
        <header className="header">
            <div>
                <FiTruck />
                <label>ESTAMOS ENVIANDO NORMALMENTE PARA TODO O BRASIL</label>
            </div>
            <div className="header-aba-1">
                <img className="logo" src={Logo} alt="logo" />
                <button className="botao-header"><FaBars/></button>
                <div>
                    <FaBAiOutlineSearcheer />
                    <input />
                </div>
                <div>
                    <div>
                        <IoChatbubblesOutline />
                        <label>Central de</label>
                        <label>Atendimento</label>
                    </div>
                    <div>
                        <label>Entrar ou</label>
                        <label>Cadastrar</label>
                    </div>
                    <div>
                        <label>Meu Carrinho</label>
                        <label>R$ {contaCarrinho}</label>
                    </div>
                </div>
            </div>
            <div className="header-aba-2"></div>
        </header>
    );
}


export default Header;