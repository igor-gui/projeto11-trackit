import { render } from "react-dom";
import App from "./App";
import { AuthProvider } from "./providers/auth";

const root = document.querySelector('.root')



render(
    <AuthProvider>
     <App /> 
    </AuthProvider>
     , root
     )