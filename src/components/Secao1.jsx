function Secao1(props){
    return(
        <div className="secao-aviso">
            <div className="secao-aviso-topo">
                <div className="secao-aviso-1">
                    <ImTruck className="secao-aviso-icone"/>
                    <label className="header-aviso-texto"> <style>ENTREGAMOS EM</style> TODO BRASIL</label>
                </div>
                <div className="secao-aviso-2">
                    <ImTruck className="secao-aviso-icone"/>
                    <label className="header-aviso-texto"> <style>PARCELAMENTOS EM</style> ATÈ 6X NO CARTÂO</label>
                </div>
                <div className="secao-aviso-3">
                    <ImTruck className="secao-aviso-icone"/>
                    <label className="header-aviso-texto"><style>PAGUE NO PIX COM</style> 10% DE DESCONTO</label>
                </div>
                <div className="secao-aviso-4">
                    <ImTruck className="secao-aviso-icone"/>
                    <label className="header-aviso-texto"> <style>TROCA GRÀTIS EM</style> ATÈ 15 DIAS</label>
                </div>
                <div className="secao-aviso-5">
                    <ImTruck className="secao-aviso-icone"/>
                    <label className="header-aviso-texto"><style>COMPRA GARANTIDA</style> LOJA 100% SEGURA</label>
                </div>
            </div>
            <div className="secao-aviso-baixo">
                <img className="secao-aviso-foto" src={props.imagem1}/>
                <img className="secao-aviso-foto" src={props.imagem2}/>
                <img className="secao-aviso-foto" src={props.imagem3}/>
            </div>
        </div>
    )
}

export default Secao1;