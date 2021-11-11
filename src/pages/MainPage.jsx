import '../styles/MainPage.css';
import Header from '../components/Header';
import SecaoProduto from '../components/SecaoProduto';
import FotoSecao1 from '../assets/pexels-miguel-á-padriñán-1111314.jpg';
import FotoSecao2 from '../assets/pexels-david-bartus-295884.jpg';

import ImagemProduto1 from '../assets/38852567_1.jpg';
import ImagemProduto2 from '../assets/L59-0106-460_zoom3.jpg';
import ImagemProduto3 from '../assets/ferrari-black-eau-de-toilette-perfume-masculino-40ml-7445-2551505419271189293.jpg';
import ImagemProduto4 from '../assets/711DVuFe4lL._AC_SX522_.jpg';
import ImagemProduto5 from '../assets/3744449661_1.jpg';
import ImagemProduto6 from '../assets/3744449661_3.jpg';
import ImagemProduto7 from '../assets/613pf1JTs9L._AC_SL1000_.jpg';
import ImagemProduto8 from '../assets/613YqAs5n3L._AC_SL1000_.jpg';

import ConteudoVideo from '../components/ConteudoVideo.jsx';

function MainPage() {
  const produtos = [
    { 'imagem1': ImagemProduto1, 'imagem2': ImagemProduto2, 'nome': 'Perfume Wanted By Night Azzaro Eau de Parfum 100ml - Incolor', 'preco': '316,50'},
    { 'imagem1': ImagemProduto3, 'imagem2': ImagemProduto4, 'nome': 'Ferrari Scuderia Black Eau de Toilette Masculino 200ML', 'preco': '487,89'},
    { 'imagem1': ImagemProduto5, 'imagem2': ImagemProduto6, 'nome': 'Scuderia Ferrari Masculino Eau de Toilette', 'preco': '267,89'},
    { 'imagem1': ImagemProduto7, 'imagem2': ImagemProduto8, 'nome': 'Câmera Digital DSLR Nikon D7500 lente de 18-140mm', 'preco': '11.434,08'},
  ]
  return (
    <div className="tela">
        <Header />
        <div className="conteudo-home">
            <SecaoProduto tipo="secao" fotosecao={FotoSecao1} titulo="Novidades" subtitulo="Para todos os gostos"/>
            <SecaoProduto tipo="secao" fotosecao={FotoSecao2} titulo="Relogios" subtitulo="Pra quêm não perde tempo"/>
            <ConteudoVideo url="https://www.youtube.com/embed/XKfgdkcIUxw" url2="https://www.youtube.com/embed/dCvvugSjnZ4" titulo="Lançamento Iphone 13 PRO / Notebook Gamer HP Pavilion"/>
            {/*<SecaoProduto tipo="secao" />
            <SecaoProduto tipo="secao" />
            <SecaoProduto tipo="carrosel" />
            <SecaoProduto tipo="carrosel" />
            <SecaoProduto tipo="pack" />
            <SecaoProduto tipo="pack" />*/}
        </div>
    </div>
  );
}

export default MainPage;