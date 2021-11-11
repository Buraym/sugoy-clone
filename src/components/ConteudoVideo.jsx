import '../styles/ConteudoVideo.css';

function ConteudoVideo(props) {
    return(
        <div className="tela-video">
            <label className="video-titulo">{props.titulo}</label>
            <div className="caixa-videos">
                <iframe
                    className="video"
                    src={props.url}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
                <iframe
                    className="video"
                    src={props.url2}
                    frameBorder="0"
                    allowFullScreen>
                </iframe> 
            </div>
        </div>
    );
}

export default ConteudoVideo;