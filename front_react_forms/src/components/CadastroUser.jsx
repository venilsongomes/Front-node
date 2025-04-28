import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../services/api'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function CadastroUser() {

    const [users, setUsers] = useState([])

    const inputName = useRef() // Captura as informações no input nome
    const inputAge = useRef() // Captura as informações no input nome
    const inputEmail = useRef() // Captura as informações no input nome


    async function getUserss() { // GET =>:BUSCAR NO BD
        const usersFromApi = await api.get('/usuarios')
        setUsers(usersFromApi.data)
    }

    async function createUsers() {

        try {
            await api.post('/usuarios', {
                name: inputName.current.value,
                age: inputAge.current.value,
                email: inputEmail.current.value
            })
            alert('Usuário cadastrado com sucesso')
        } catch (error) {
            alert('Erro ao cadastrar usuário')
        }
    }


    async function deleteUser(id) { // Deletar Usuario =>:BUSCAR NO BD
        await api.delete(`/usuarios/${id}`)
        getUserss()
    }



    async function updateUser(id) {
        await api.put(` /usuario/${id}`)
        getUserss()
    }

    useEffect(() => {

    }, [])

    return (
        <div className='container'>  
        

             <form className="needs-validation" novalidate onSubmit={createUsers}>

                 <h1> Cadastro de Usuários </h1>


            <div className="form-row">
                <div className="">
                    
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Nome" ref={inputName} required />
                    
                </div>
                <div className="">
                    
                    <input
                        type="number" className="form-control" id="validationCustom02" placeholder="Idade" ref={inputAge} required />
                    <div className="valid-feedback">Tudo certo!</div>
                </div>
                <div className="">
                   
                   
                        <input type="email" className="form-control" id="validationCustomUsername" placeholder="E-mail" ref={inputEmail} required />
                    
                </div>
            </div>

            <button className="btn btn-primary" type="submit">
                Enviar
            </button>
        </form>
        </div>
    )
}

export default CadastroUser
