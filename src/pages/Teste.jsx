import '../styles/Teste.css';
import Produto from "../components/Produto";
import ImagemProduto1 from '../assets/38852567_1.jpg';
import ImagemProduto2 from '../assets/L59-0106-460_zoom3.jpg';

import ImagemProduto3 from '../assets/ferrari-black-eau-de-toilette-perfume-masculino-40ml-7445-2551505419271189293.jpg';
import ImagemProduto4 from '../assets/711DVuFe4lL._AC_SX522_.jpg';

import ImagemProduto5 from '../assets/3744449661_1.jpg';
import ImagemProduto6 from '../assets/3744449661_3.jpg';

import ImagemProduto7 from '../assets/613pf1JTs9L._AC_SL1000_.jpg';
import ImagemProduto8 from '../assets/613YqAs5n3L._AC_SL1000_.jpg';

function Teste() {
  return (
    <div className="tela-testes">
        <Produto imagem1={ImagemProduto1} imagem2={ImagemProduto2} nome="Perfume Wanted By Night Azzaro Eau de Parfum 100ml - Incolor" preco="316,50" />
        <Produto imagem1={ImagemProduto3} imagem2={ImagemProduto4} nome="Ferrari Scuderia Black Eau de Toilette Masculino 200ML" preco="487,89" />
        <Produto imagem1={ImagemProduto5} imagem2={ImagemProduto6} nome="Scuderia Ferrari Masculino Eau de Toilette" preco="267,89" />
        <Produto imagem1={ImagemProduto8} imagem2={ImagemProduto7} nome="Câmera Digital DSLR Nikon D7500 lente de 18-140mm" preco="11.434,08" />
    </div>
  );
}

export default Teste;