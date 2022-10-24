import { createContext , useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    
    const [form, setForm] = useState({email: "", name: "", image: "", password: ""})

    
    const formData = {form: form, setForm: setForm, baseURL:'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/' }
    
    
    return (
        <AuthContext.Provider value={formData}>
            {props.children}
        </AuthContext.Provider>
    )
}