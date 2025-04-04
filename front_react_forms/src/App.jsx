import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CadastroUser from './components/CadastroUser';
import CadastroProduct from './components/CadastroProduct';
import NotFound from './components/NotFound';
import  Home from './components/Home';
import Baixa from './components/Baixa';
import Saidas from './components/Saidas';
import Imgs from './assets/img.png'



function App() {
    return (
        <div>

            <BrowserRouter>
                <nav>
                    
                  <Link to={'/Home'}> Home</Link> <Link to='/CadastroUser'>Cadastro de Usuário</Link>  <Link to='/CadastroProduct'>Cadastro de Produto</Link>  <Link to='/Baixa'>Baixa de Produto</Link>  <Link to='Saidas'> Saidas</Link>
                    
                </nav>  

                <Routes>
                    <Route path='/Home' element={<Home/>} />
                    <Route path='/cadastroUser' element={<CadastroUser/>} />
                    <Route path='/CadastroProduct' element={<CadastroProduct/>} />
                    <Route path='/Baixa' element={<Baixa/>} />
                    <Route path='Saidas' element={<Saidas/>}/>
                    <Route path='*' element={<NotFound/>} />
                </Routes>



                </BrowserRouter>

                <footer>   <p> &copy;Desenvolvido Por Venilson Rocha </p> </footer>

        </div>
    );
}

export default App;  