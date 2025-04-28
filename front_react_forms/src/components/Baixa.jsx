import React from "react";
import api from "../services/api";
import { useState, useEffect, useRef } from "react";


function Baixa() {

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [userSelect, setuserSelect] = useState('NAda A mostar')
    const [productSelect, setProductSelect] = useState()


    const inputQuantity = useRef()
    const inputSector = useRef()
    const inputData = useRef()


    async function createBaixa() {


        try {




            await api.post('/baixa', {

                produto: productSelect,
                quantidade: inputQuantity.current.value,
                nome: userSelect,
                setor: inputSector.current.value,
                data: inputData.current.value


            })
            alert('Baixa realizada com sucesso  ')
        }
        catch (error) {
            alert('Erro ao realizar baixa')
        }
    }

    async function getUsers() {
        const usersFromApi = await api.get('/usuarios')
        setUsers(usersFromApi.data)
    }

    async function getProducts() {
        const productsFromApi = await api.get('/produtos')
        setProducts(productsFromApi.data)
    }
    useEffect(() => {
        getUsers();
        getProducts();
    }, []);


    return (
        <div className="container">

            <form className="needs-validation" action={createBaixa}>
                <h1> Baixa de Produtos</h1>

                <div>  <select className="form-control" id="produto" value={productSelect} onChange={(e) => setProductSelect(e.target.value)} required>
                    <option value="">Selecione um Produto </option>
                    {
                        products.map((product) => (
                            <option key={product.id} value={product.name}>
                                {product.name}

                            </option>
                        ))
                    }
                         </select>
                </div>


                <div>
                    <input className="form-control" type="text" placeholder="Quantidade" id="" ref={inputQuantity} required />
                </div>

                <div>
                    <select className="form-control" id="colaborador"

                        value={userSelect}
                        onChange={(e) => setuserSelect(e.target.value)

                        }
                        required>


                        <option value="">Selecione um produto </option>
                        {
                            users.map((user) => (
                                <option key={user.id} value={user.name}>
                                    {user.name}

                                </option>
                            ))}

                    </select>
                </div>

                <div><input className="form-control" type="text" placeholder=" Setor" id="" ref={inputSector} required /></div>

                <div> <input className="form-control" type="text" placeholder="Data" ref={inputData} required /></div>

                <button className="btn btn-primary" type="submit">Baixar</button>



            </form>
        </div>

    )
}

export default Baixa;