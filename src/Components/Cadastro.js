import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../images/Logo.svg'
import { StyledSignUp } from './styledComponents'

export default function Cadastro() {
    const [form, setForm] = useState({})

    const [email , setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')

    return (

        <StyledSignUp>
            <img src={Logo} alt='' />
            <form>
                <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='senha' onChange={(e) => setSenha(e.target.value)} />
                <input placeholder='nome' onChange={(e) => setNome(e.target.value)} />
                <input placeholder='foto' onChange={(e) => setFoto(e.target.value)} />
                <button>Cadastrar</button>
            </form>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </StyledSignUp>

    )
}