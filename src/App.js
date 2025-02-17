
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './componentes/LoginFormulario';
import Registrarse from './componentes/RegistrarseFormulario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registrarse />} />
 
 
    </Routes>
      </BrowserRouter>
   
  );
}

export default App;
