import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg'
import { StyledLogin } from './styledComponents'






export default function Login() {


    const [formulario, setFormulario] = useState({ email: '', name: '', image: '', password: '' })

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleFormulario(email, senha) {
        setFormulario({ email: email, senha: senha })
        alert(formulario.email)
    }

    return (
        <StyledLogin>
            <img src={Logo} alt='' />
            <form>
                <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='senha' onChange={(e) => setSenha(e.target.value)} />
                <button onClick={() => handleFormulario(email, senha)}>Entrar</button>
            </form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledLogin>
    )
}