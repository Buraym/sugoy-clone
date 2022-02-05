import '../styles/SecaoProduto.css';
import FlechaEsquerda from './FlechaEsquerda';
import Produto from './Produto';

function ProdutoPack(props) {
    
    return (
        <div className="caixa-pack">
            <div className="caixa-imagem-pack">
                <img className="imagem-pack-fundo" src={props.imagem} alt="Imagem do fundo do Pack" />
            </div>
            <div className="caixa-pack-conteudo">
                { props.produtos.map( ( produto, index ) => { return <Produto key={ index } imagem1={ produto.imagem1 } imagem2={ produto.imagem2 } nome={ produto.nome } preco={ produto.preco }/> } )}
            </div>
        </div>
    );
}

export default ProdutoPack;