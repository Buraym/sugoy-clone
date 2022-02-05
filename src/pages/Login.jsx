import { useState } from 'react';
import { Link } from 'react-router-dom';
import'../styles/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [lembrar, setLembrar] = useState(false);

    const usuario = {
        username: username,
        senha:password
    }

    function HandleChangeUsername(e){
        setUsername(e.target.value);
        e.preventDefault();
    }

    function HandleChangePassword(e){
        setPassword(e.target.value);
        e.preventDefault();
    }

    function HandleSubmit(e){
        e.preventDefault();
    }
      
    return(
        <div className="tela-login">
            <div className="caixa-logo">
                <label className="logo-login">GroupSugoy</label>
            </div>
            <div className="caixa-logo-login">
                <form className="caixa-formulario-login" onSubmit={()=>HandleSubmit()}>
                    <div className="formulario-login">
                        <input className="login-username"/>
                        <label className="login-username-label">Email</label>
                    </div>
                    <div className="formulario-login">
                        <input className="login-senha"/>
                        <label className="login-senha-label">Senha</label>
                    </div>
                    <div className="formulario-login-aviso">
                        <div>
                            <label className="label-redefinir-senha">Esqueceu sua senha </label>/
                            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                                <label className="label-cadastro"> Cadastrar-se ?</label>
                            </Link>
                            
                        </div>
                        
                        <div>
                            <input type="checkbox" className="login-lembrarme"/>
                            <label>
                                Lembrar me
                            </label>
                        </div>
                    </div>
                    <div>
                        <input className="login-submit" type="submit" value="Login"/>
                    </div>
                </form>
                <footer className="footer-login">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#1b9aaa" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,256C640,235,800,181,960,160C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </footer>
            </div>
        </div>
    );
}

export default Login;