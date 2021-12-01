import '../styles/Produto.css';
import { useState} from "react";
import { FaWhatsapp } from 'react-icons/fa';

function Produto(props) {

    /*
        PRECO UNITARIO -> props.preco
        PRECO TOTAL -> precoTotal
        QUANTIDADE -> quantidade
        NOME DO PRODUTO -> props.nome
        PRIMEIRA IMAGEM DO PRODUTO -> props.imagem1
        SEGUNDA IMAGEM DO PRODUTO -> props.imagem2
    */

    const [quantidade, setQuantidade] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(props.preco);

    function TrocarPreco(troca) {
        if(troca === 'mais') {
            setQuantidade(quantidade + 1);
            setPrecoTotal(precoTotal + props.preco);
        }
        if(troca === 'menos' && quantidade > 1) {
            setQuantidade(quantidade - 1);
            setPrecoTotal(precoTotal - props.preco);
        }
    }

    function HandleComprar() {

        if( window.localStorage.getItem('totaldecompras') !== null){

            var listaStringTotal = (window.localStorage.getItem("totaldecompras"))
            var listaTotal = (JSON.parse(listaStringTotal))
            var total = listaTotal[0] + precoTotal;
            window.localStorage.removeItem("totaldecompras")
            window.localStorage.setItem('totaldecompras', JSON.stringify([total]));
            console.log("TOTAL DESSA COMPRA -> " + precoTotal)
            console.log("TOTAL DE COMPRAS DO CARRINHO -> " + window.localStorage.getItem('totaldecompras'))

        }

        if( window.localStorage.getItem('totaldecompras') === null){

            window.localStorage.setItem('totaldecompras', JSON.stringify([precoTotal]));
            console.log("TOTAL DESSA COMPRA -> " + precoTotal)
            console.log("TOTAL DE COMPRAS DO CARRINHO -> " + window.localStorage.getItem('totaldecompras'))

        }


        if ( window.localStorage.getItem('carrinho') !== null) {
            var listaString = (window.localStorage.getItem("carrinho"))
            var listaCarrinho = (JSON.parse(listaString))
            listaCarrinho.push([props.nome, props.preco, precoTotal, quantidade])
            window.localStorage.removeItem("carrinho")
            window.localStorage.setItem("carrinho", JSON.stringify(listaCarrinho))
            console.log("CARRINHO -> " + [props.nome, props.preco, precoTotal, quantidade])
            console.log("O QUE FOI PRINTADO COMO CARRINHO -> " + window.localStorage.getItem('carrinho'))
        }

        if ( window.localStorage.getItem('carrinho') === null) {

            window.localStorage.setItem("carrinho", JSON.stringify([[props.nome, props.preco, precoTotal, quantidade]]));
            console.log("CARRINHO -> " + [props.nome, props.preco, precoTotal, quantidade])
            console.log("O QUE FOI PRINTADO COMO CARRINHO -> " + window.localStorage.getItem('carrinho'))

        }

    }

    return (
        <div className="produto-card">
            <div className="produto-imagem-caixa">
                    <img className="produto-imagem-fundo"src={props.imagem1} alt=""/>
                    <img className="produto-imagem" src={props.imagem2} alt=" " />
            </div>
            <div className="produto-nome-caixa">
                <label className="produto-nome">{props.nome}</label>
            </div>
            <div className="produto-preco-caixa">
                <label className="produto-preco">R$ {precoTotal}</label>
            </div>
            <div className="produto-quantidade-caixa-grande">
                <div className="produto-quantidade-caixa">
                        <div className="produto-quantidade-caixa-texto">
                            <label className="produto-quantidade-texto">{quantidade}</label>
                        </div>
                        <div className="produto-quantidade-acao">
                            <button className="produto-quantidade-acao-botao" onClick={() =>TrocarPreco('mais')}>+</button>
                            <button className="produto-quantidade-acao-botao" onClick={() =>TrocarPreco('menos')}>-</button>
                        </div>
                </div>
                <button className="produto-quantidade-adicionar" onClick={() => HandleComprar()}>Adicionar</button>
            </div>
            <div className="produto-compras-whatsapp">
                <button className="produto-botao-whatsapp">
                    <FaWhatsapp className="produto-icone-whatsapp"/>
                    Comprar pelo Whatsapp
                </button>
            </div>
        </div>
    );
}

export default Produto;