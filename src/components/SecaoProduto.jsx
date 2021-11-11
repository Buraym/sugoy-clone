import Produto from './Produto';
import Slider from "react-slick";
import "../styles/_slick.scss"; 
import "../styles/_slick-theme.scss";
import '../styles/SecaoProduto.css';
import FlechaEsquerda from './FlechaEsquerda.jsx';
import FlechaDireita from './FlechaDireita.jsx';

function SecaoProduto(props) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FlechaDireita />,
    prevArrow: <FlechaEsquerda />,
  };

  return (
    props.tipo === "secao" 
      ?
        <div className="secao-produto">
          <div className="secao-caixa-foto">
            <img className="secao-foto" src={props.fotosecao} alt=""/>
            <label className="secao-produto-titulo">{props.titulo}</label>
            <label className="secao-produto-subtitulo">{props.subtitulo}</label>
          </div>
        </div>
          : 
            props.tipo == "carrosel" 
              ?
              <div className="secao-produto-carrosel">
                <Slider {...settings}>
                  {props.produtos.map((produto, index) => {
                    return <Produto key={index} imagem1={produto.imagem1} imagem2={produto.imagem2} nome={produto.nome} preco={produto.preco}/>
                  })}
                </Slider>
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