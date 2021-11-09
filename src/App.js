import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Teste from './pages/Teste.jsx';
import MainPage from './pages/MainPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
