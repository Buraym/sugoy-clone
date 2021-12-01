import React, { useState } from "react";
import FlechaDireita from './FlechaDireita';
import FlechaEsquerda from './FlechaEsquerda';
import Produto from "./Produto.jsx";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import '../styles/Carrosel.css'

function CarroselSimples(props) {
  return (
    <div className="caixa-carrosel">
      <label className="titulo-carrosel">{props.titulo}</label>
      <li className="lista-carrosel">
        {props.produtos.map((produto, index) => {
          return <Produto key={index} imagem1={produto.imagem1} imagem2={produto.imagem2} nome={produto.nome} preco={produto.preco}/>
        })}
      </li>
    </div>
  );
}

export default CarroselSimples;