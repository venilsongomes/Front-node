import api from '../services/api'
import { useState, useEffect } from 'react'



function Saidas() {
    const [getSaidas, setGetSaidas] = useState([])


    async function getBaixas() {
        const saidas = await api.get('/Baixa')
        setGetSaidas(saidas.data)
    }

    useEffect(() => {
        getBaixas()
    }, [getSaidas])

    return (
        <div className='container'>
<h1> Saidas</h1>
            <table>
                

                <thead>
                    <tr>
                        <th> <h1>Produto</h1></th>
                        <th> <h1>Quantidade</h1></th>
                        <th><h1>Nome</h1> </th>
                        <th><h1>Setor</h1> </th>
                        <th><h1>Data</h1> </th>
                    </tr>
                </thead>

                {
                   
                        <tbody>


                            {
                                getSaidas.map((saida) => (
                                    <tr key={saida.id}>
                                        <td> <p> {saida.produto}</p></td>
                                        <td> <p> {saida.quantidade}</p></td>
                                        <td> <p> {saida.nome}</p></td>
                                        <td> <p> {saida.setor}</p></td>
                                        <td> <p> {saida.data}</p></td>
                                    </tr>
                                ))
                            }

                        </tbody>
}
    
            </table>

        </div>
    )
}


export default Saidas

