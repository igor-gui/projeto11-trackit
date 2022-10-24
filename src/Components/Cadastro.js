import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Logo from '../images/Logo.svg'
import { StyledSignUp } from './styledComponents'
import axios from 'axios'
import { AuthContext } from '../providers/auth'

export default function Cadastro() {

    // const [email, setEmail] = useState('')
    // const [nome, setNome] = useState('')
    // const [foto, setFoto] = useState('')
    // const [senha, setSenha] = useState('')

    const navigate = useNavigate()


    const { form, setForm, baseURL } = useContext(AuthContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function signUp() {
        console.log(form)
        const url = baseURL + 'auth/sign-up'
        const body = {...form}
        const promise = axios.post(url, body)

        promise.then((res) => {
            navigate('/')
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })
    }


    return (

        <StyledSignUp>
            <img src={Logo} alt='' />
            <form>
                <input name='email' placeholder='email' onChange={(e) => handleForm(e)} />
                <input name='password' placeholder='senha' onChange={(e) => handleForm(e)} />
                <input name='name' placeholder='nome' onChange={(e) => handleForm(e)} />
                <input name='image' placeholder='foto' onChange={(e) => handleForm(e)} />
                <button onClick={signUp}>Cadastrar</button>
            </form>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </StyledSignUp>

    )
}