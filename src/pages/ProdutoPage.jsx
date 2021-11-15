import { useState } from 'react';
import '../styles/ProdutoPage.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


function ProdutoPage(props) {

  const [imagemAtual, setimagemAtual] = useState(props.imagem[0]['imagem']);
  const [aberto1, setAberto1] = useState(false);

  return (
    <div className="tela">
      <Header />
      <div className="tela-produto-detalhes">
        <div>
          { props.imagem.map((imagem, index) => { return ( <img key={index} src={imagem} alt="imagem do produto" onClick={setimagemAtual(imagem)} /> )})}
        </div>
        <div className="tela-produto-detalhes-descricao">
          <img src={imagemAtual} alt="imagem do produto" />
        </div>
        <div className="tela-produto-descricao">
          <div className="tela-produto-caixa-especificacao">
            <label>{props.marca}</label>
            <label>{props.nomeproduto}</label>
            <label>Código: {props.codigo}</label>
          </div>
          <div className="tela-produto-caixa-preco">
            <label>Por R$ {props.preco}</label>

            <div className="tela-produto-caixa-preco-pix">
              <div>
                {/* NÃO SE ESUQEÇA DE COLOCAR O ICONE DO PIX AQUI, BLZA ? */}
                <div>
                  <label>R$ {props.preco} no pix</label>
                  <div><label>10% de desconto</label></div>
                </div>
                <div>
                  Pague com pix e economize R$ {props.preco / 10}
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  Mercado Pago
                  <button onClick={setAberto1(aberto1 = !aberto1)}>Parcelas { aberto1 ? <FaChevronUp /> : <FaChevronDown />}</button>
                </div>
              {
                aberto1 ?
                  <div>
                    <div>
                      <label>1X de R$ {props.preco} sem juros</label>
                      <label>2X de R$ {props.preco / 2}</label>
                      <label>3X de R$ {props.preco / 3}</label>
                      <label>4X de R$ {props.preco / 4}</label>
                      <label>5X de R$ {props.preco / 5}</label>
                      <label>6X de R$ {props.preco / 6}</label>
                    </div>
                    <div>
                      <label>7X de R$ {props.preco / 7}</label>
                      <label>8X de R$ {props.preco / 8}</label>
                      <label>9X de R$ {props.preco / 9}</label>
                      <label>10X de R$ {props.preco / 10}</label>
                      <label>11X de R$ {props.preco / 11}</label>
                      <label>12X de R$ {props.preco / 12}</label>
                    </div>
                  </div>
                    :
                    null
              }
              </div>
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
        </div>
      </div>
      <div className="tela-produto-descricao"></div>
      <div className="tela-produto-detalhes"></div>
    </div>
  );
}

export default ProdutoPage;