import { useState, useEffect } from 'react';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgPlaceholder from '../assets/fiat.png';



function Home() {

    const [produtos, setProdutos] = useState([])

    async function getProdutos() { // GET =>:BUSCAR NO BD
        const produtosFromApi = await api.get('/produtos')
        setProdutos(produtosFromApi.data)
    }

    
    useEffect(() => { // MApear na tela => Importar o useEffect
       getProdutos()
    }, [])


    return (
       
   

<div className="card1"    >


  {
     produtos.map((produto) =>(

    <div className="car"  key={produto.id}>

        <img className='card-img-top'   src={imgPlaceholder} alt="Imagem de capa do card" />

       <p> {produto.name} </p>
       <p> {produto.quantidade} </p>
       <p> FIAT STRADA - 1.3 FIREFLY FLEX FREEDOM CS MANUAL.
        Ano: 2022/2023
        KM:43.412
        Cambio: Manual
        Carroceiria: Picape
        Combustivel: Gasolina e álcool  </p>
  </div>
     ))

  }
  
</div>




        
    
)}

export default Home;