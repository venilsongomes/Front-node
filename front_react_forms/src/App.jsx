import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CadastroUser from './components/CadastroUser';
import CadastroProduct from './components/CadastroProduct';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Baixa from './components/Baixa';
import Saidas from './components/Saidas';
import Imgs from './assets/img.png'



function App() {
    return (
        <div>

            <BrowserRouter>
                <ul className='nav nav-tabs'>

                    <li className='nav-item'>
                        <a class="nav-link active"><Link to={'/Home'}> Home</Link></a>
                    </li>

                    <li className='nav-item'>
                        <a class="nav-link active"><Link to='/CadastroUser'>Cadastro de Usuário</Link></a>
                    </li>

                    <li className='nav-item'>
                        <a class="nav-link active"><Link to='/CadastroProduct'>Cadastro de Produto</Link></a>
                    </li>

                    <li className='nav-item'>
                        <a class="nav-link active"><Link to='/Baixa'>Baixa de Produto</Link></a>
                    </li>

                    <li className='nav-item'>
                        <a class="nav-link active"><Link to='Saidas'> Saidas</Link></a>
                    </li>

                </ul>

                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/cadastroUser' element={<CadastroUser />} />
                    <Route path='/CadastroProduct' element={<CadastroProduct />} />
                    <Route path='/Baixa' element={<Baixa />} />
                    <Route path='Saidas' element={<Saidas />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>



            </BrowserRouter>

            <footer>

                <p> &copy;Desenvolvido Por Venilson Rocha </p>
                
            </footer>

        </div>
    );
}

export default App;  