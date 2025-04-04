import { useRef, useState, useEffect } from 'react';
import api from '../services/api';  // Importando a api


function CadastroProduct() {


    const [produtos, setProdutos] = useState([])

    const nomeRef = useRef();
    const quantidadeRef = useRef();
    const descricaoref = useRef();
    const imagemRef = useRef();

    async function createProduct() {

        console.log(nomeRef.current.value);

        await api.post('/produtos', {

            name: nomeRef.current.value,
            quantidade: quantidadeRef.current.value,

        })

    }

    async function deleteProduct(id) { // Deletar Usuario =>:BUSCAR NO BD
        await api.delete(`/produtos/${id}`)

    }

    useEffect(() => { // MApear na tela => Importar o useEffect

    }, [])

    return (
        <div className='container'>

            <form className="needs-validation" novalidate onSubmit={createProduct}>

                <h1> Cadastro de Produtos </h1>
              <div className='form-row'>    

                <div>
                    <input className="form-control" placeholder="Produto" ref={nomeRef} />
                </div>

                <div>
                    <input className="form-control" type="Number" placeholder="Quantidade" ref={quantidadeRef} />
                </div>

                <div>
                    <input className="form-control" placeholder='Description' ref={descricaoref} />
                </div>

                <div>
                    <input className="form-control" type="file" ref={imagemRef} id="fileInput" />
                </div>
                </div>

                <button type='submit' className="btn btn-primary" > Cadastrar</button>

            </form>

        </div>
    )

} export default CadastroProduct;