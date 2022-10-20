import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './Components/Cadastro'
import Habitos from './Components/Habitos'
import Login from './Components/Login'
import GlobalStyle from './GlobalStyle'



export default function App() {

    

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/habitos' element={<Habitos />} />
                    <Route path='/hoje' element={''} />
                    <Route path='/historico' element={''} />
                </Routes>
            </BrowserRouter>
        </>
    )
}