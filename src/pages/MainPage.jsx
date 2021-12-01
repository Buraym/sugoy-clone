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
import ImagemProduto7 from '../assets/Ferrari Man In Red Eau de Toilette Masculino 100ML 1.jpg';
import ImagemProduto8 from '../assets/Ferrari Man In Red Eau de Toilette Masculino 100ML 2.jpg';
import ImagemProduto9 from '../assets/Impact Tommy Hilfiger Masculino 50ml 1.jpg';
import ImagemProduto10 from '../assets/Impact Tommy Hilfiger Masculino 50ml 2.jpg';


import ImagemProduto11 from '../assets/Camera DSLR Nikon D3500 Camera Lente18-55mm 2.jpg';
import ImagemProduto12 from '../assets/Camera DSLR Nikon D3500 Camera Lente18-55mm 1.jpg';
import ImagemProduto13 from '../assets/Câmera Digital Nikon Coolpix P1000 zoom 125X 1.jpg';
import ImagemProduto14 from '../assets/Câmera Digital Nikon Coolpix P1000 zoom 125X 2.jpg';
import ImagemProduto15 from '../assets/Câmera Digital Nikon COOLPIX P900 1.jpg';
import ImagemProduto16 from '../assets/Câmera Digital Nikon COOLPIX P900 2.jpg';
import ImagemProduto17 from '../assets/Câmera Nikon D5600 DSLR com lente 18-140mm 1.jpg';
import ImagemProduto18 from '../assets/Câmera Nikon D5600 DSLR com lente 18-140mm 2.jpg';

import ConteudoVideo from '../components/ConteudoVideo.jsx';
import Carrosel from '../components/Carrosel.jsx';

function MainPage() {

  const produtos1 = [
    { imagem1: ImagemProduto1, imagem2: ImagemProduto2, nome: 'Perfume Wanted By Night Azzaro Eau de Parfum 100ml - Incolor', preco: 316.50},
    { imagem1: ImagemProduto3, imagem2: ImagemProduto4, nome: 'Ferrari Scuderia Black Eau de Toilette Masculino 200ML', preco: 487.89},
    { imagem1: ImagemProduto5, imagem2: ImagemProduto6, nome: 'Scuderia Ferrari Masculino Eau de Toilette', preco: 267.89},
    { imagem1: ImagemProduto7, imagem2: ImagemProduto8, nome: 'Ferrari Man In Red Eau de Toilette Masculino 100ML', preco: 388.90},
    { imagem1: ImagemProduto9, imagem2: ImagemProduto10, nome: 'Impact Tommy Hilfiger Masculino 50ml', preco: 550.68},
  ]

  const produtos2 = [
    { imagem1: ImagemProduto11, imagem2: ImagemProduto12, nome: 'Camera DSLR Nikon D3500 Camera Lente18-55mm', preco: 4500.60},
    { imagem1: ImagemProduto13, imagem2: ImagemProduto14, nome: 'Câmera Digital Nikon Coolpix P1000 zoom 125X', preco: 14175.76},    
    { imagem1: ImagemProduto15, imagem2: ImagemProduto16, nome: 'Câmera Digital Nikon COOLPIX P900', preco: 11667.42},
    { imagem1: ImagemProduto17, imagem2: ImagemProduto18, nome: 'Câmera Nikon D5600 DSLR com lente 18-140mm', preco: 5990.90},
  ]

  return (
    <div className="tela">
        <Header />
        <div className="conteudo-home">
            <SecaoProduto fotosecao={FotoSecao1} tituloSecao="Novidades" subtituloSecao="Para todos os gostos"/>
            <SecaoProduto fotosecao={FotoSecao2} tituloSecao="Relogios" subtituloSecao="Pra quêm não perde tempo"/>
            <Carrosel produtos={produtos1} titulo="Seção de Essências Masculinas"/>
            <Carrosel produtos={produtos2} titulo="Câmeras Nikon"/>
            <ConteudoVideo url="https://www.youtube.com/embed/XKfgdkcIUxw" url2="https://www.youtube.com/embed/dCvvugSjnZ4" titulo="Lançamento Iphone 13 PRO / Notebook Gamer HP Pavilion"/>
        </div>
    </div>
  );
}

export default MainPage;