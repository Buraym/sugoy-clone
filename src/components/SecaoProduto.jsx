import Produto from './Produto';

function SecaoProduto(props) {
  return (
    props.tipo === "secao" 
      ?
        <div className="secao-produto">
          <div className="caixa-foto-fundo">
            <img src={props.fotosecao} alt=""/>
          </div>
          <div className="secao-produto-titulo">
            <label>{props.titulo}</label>
          </div>
        </div>
          : 
            props.tipo == "carrosel" 
              ?
                <div className="carrosel-produto">
                  <div className="carrosel-produto-titulo">
                    <label>{props.titulo}</label>
                  </div>
                </div>
                  :
                    <div className="pack-produto">
                      <div className="pack-produto-titulo">
                        <h2>{props.titulo}</h2>
                      </div>
                      <div>
                        <Produto imagem1={props.produtofoto1} imagem2={props.produtofoto2} nome={props.produtotitulo1} preco={props.descricao1}/>
                        <Produto imagem1={props.produtofoto3} imagem2={props.produtofoto4} nome={props.produtotitulo2} preco={props.descricao2}/>
                        <Produto imagem1={props.produtofoto5} imagem2={props.produtofoto6} nome={props.produtotitulo3} preco={props.descricao3}/>
                        {
                          props.produtotitulo4 === "" ?
                            <Produto imagem1={props.produtofoto7} imagem2={props.produtofoto8} nome={props.produtotitulo4} preco={props.descricao4}/>
                              :
                                <></>
                        }
                      </div>
                    </div>
  );
}

export default SecaoProduto;