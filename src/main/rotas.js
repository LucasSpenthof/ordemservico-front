import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../views/home';
import Login from '../views/login';
import CadastroServidor from '../views/cadastro-servidor';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home ></Home>}></Route>
                <Route path="/login" element={<Login></Login>}/>
                <Route path="/cadastro-servidor" element={<CadastroServidor></CadastroServidor>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;