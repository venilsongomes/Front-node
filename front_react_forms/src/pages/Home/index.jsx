import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/img.png'
import api from '../../services/api'
import Trash1 from '../../assets/imgL.png'

function Home() {

    const [users, setUsers] = useState([])

    const inputName = useRef() // Captura as informações no input nome
    const inputAge = useRef() // Captura as informações no input nome
    const inputEmail = useRef() // Captura as informações no input nome


    async function getUserss() { // GET =>:BUSCAR NO BD
        const usersFromApi = await api.get('/usuarios')
        setUsers(usersFromApi.data)
    }

    async function createUsers() {
        await api.post('/usuarios', {
            name: inputName.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value
        })
        getUserss()
    }
    async function deleteUser(id) { // Deletar Usuario =>:BUSCAR NO BD
    await api.delete(`/usuarios/${id}`)
        getUserss()

    }

    async function updateUser(id) {
        await api.put(` /usuario/${id}`)
        getUserss
        
    }

    useEffect(() => {
        getUserss()
    }, [])

    return (
        <div className='container'>
            <form>
                <h1> Cadastro de Usuários</h1>
                <input placeholder='Nome' name='nome' type="text" ref={inputName} />
                <input placeholder='Idade' name='idade' type="number" ref={inputAge} />
                <input placeholder='Email' name='email' type="email" ref={inputEmail} />
                <button type='button' onClick={createUsers}>Cadastrar</button>
            </form>

            {users.map((user) => // Mapear Na tela

                <div key={user.id} className='card'>
                    <div>
                        <p>Nome:  {user.name} </p>
                        <p>Idade:<span>{user.age}</span></p>
                        <p>Email:<span> {user.email} </span></p>
                    </div>

                    <button onClick={ () => deleteUser(user.id)}>
                        <img src={Trash} />
                    </button>

                    
                </div>
            )}
        </div>
    )
}

export default Home
