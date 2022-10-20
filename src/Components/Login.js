import { useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg'
import { AuthContext } from '../providers/auth'
import { StyledLogin } from './styledComponents'






export default function Login(){

    const [form, setForm] = useState({})

    const [email , setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleForm(email, senha){
        setForm({email: email, senha: senha})
        alert(form.email)
    }

    return (
        <StyledLogin>
        <img src={Logo} alt='' />
        <form>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='senha' onChange={(e) => setSenha(e.target.value)}/>
            <button onClick={() => handleForm(email, senha)}>Entrar</button>
        </form>
        <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledLogin>
    )
}