import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Teste from './pages/Teste.jsx';
import MainPage from './pages/MainPage.jsx';
import ProdutoPage from './pages/ProdutoPage.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';

function App() {

  var stringLogin = localStorage.getItem('login');
  if (stringLogin === null || stringLogin === '') {
    stringLogin = false;
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/produto/:id" element={<ProdutoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
