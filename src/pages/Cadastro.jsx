import {useState, useEffect} from 'react';
import "../styles/Cadastro.css";

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    function HandleChangeNome(e){
        setNome(e.target.value);
        e.preventDefault();
    }

    function HandleChangeEmail(e){
        setEmail(e.target.value);
        e.preventDefault();
    }

    function HandleChangeSenha(e){
        setSenha(e.target.value);
        e.preventDefault();
    }

    function HandleChangeConfirmarSenha(e){
        setConfirmarSenha(e.target.value);
        e.preventDefault();
    }

    function HandleSubmit(e){
        if (senha == confirmarSenha){
            setSubmitted(true);
        }
        e.preventDefault();
        console.log(nome, email, senha);
    }

    return(
        <div className="tela-cadastro">
            <div className="cadastro-caixa-titulo">
                <label className="cadastro-tiulo">Tela de cadastro</label>
            </div>
            <div className="cadastro-caixa-form">
                <form className="cadastro-form" onSubmit={()=>HandleSubmit}>
                    <div className="form-caixa">
                        <input className="cadastro-input-1" onChange={()=>HandleChangeNome}/>
                        <label className="cadastro-label-1">Nome Completo</label>
                    </div>
                    <div className="form-caixa">
                        <input className="cadastro-input-2" onChange={()=>HandleChangeEmail}/>
                        <label className="cadastro-label-2">Email</label>
                    </div>
                    <div className="form-caixa">
                        <input className="cadastro-input-3" onChange={()=>HandleChangeSenha}/>
                        <label className="cadastro-label-3">Senha</label>
                    </div>
                    <div className="form-caixa">
                        <input className="cadastro-input-4" onChange={()=>HandleChangeConfirmarSenha}/>
                        <label className="cadastro-label-4">Confirmar Senha</label>
                    </div>
                    <div className="form-caixa-submit">
                        <input className="cadastro-submit" type="submit"  value="Cadastrar"/>
                    </div>
                </form>
                { submitted ? <div className="cadastro-mensagem">Processando Cadastro...</div> : <></> }
                { error == 1 ? <div className="cadastro-mensagem">Email já cadastrado !</div> : error == 2 ? <div className="cadastro-caixa-erro">As senha não são iguais !</div> : <></> }
            </div>
            <footer className="footer-login">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#06d6a0" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </footer>
        </div>
    )
}

export default Cadastro;