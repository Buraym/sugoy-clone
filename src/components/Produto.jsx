import '../styles/Produto.css';
import { useState} from "react";
import { FaWhatsapp } from 'react-icons/fa';

function Produto(props) {
    const [quantidade, setQuantidade] = useState(1);
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
              <label className="produto-preco">R$ {props.preco}</label>
          </div>
          <div className="produto-quantidade-caixa-grande">
              <div className="produto-quantidade-caixa">
                    <div className="produto-quantidade-caixa-texto">
                        <label className="produto-quantidade-texto">{quantidade}</label>
                    </div>
                    <div className="produto-quantidade-acao">
                        <button className="produto-quantidade-acao-botao" onClick={() => setQuantidade(quantidade + 1)}>+</button>
                        <button className="produto-quantidade-acao-botao" onClick={
                            () => {
                                if(quantidade > 1) {
                                    setQuantidade(quantidade - 1)
                                }}
                            }>-</button>
                    </div>
              </div>
              <button className="produto-quantidade-adicionar">Adicionar</button>
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