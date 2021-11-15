import '../styles/SecaoProduto.css';

function SecaoProduto1(props) {
    return (
        <div className="secao-produto">
            <div className="secao-caixa-foto">
                <img className="secao-foto" src={props.fotosecao} alt=""/>
                <label className="secao-produto-titulo">{props.tituloSecao}</label>
                <label className="secao-produto-subtitulo">{props.subtituloSecao}</label>
            </div>
        </div>
    );
}

export default SecaoProduto1;