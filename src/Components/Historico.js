import Footer from "./Footer";
import Header from "./Header";
import { StyleHistoric } from "./styledComponents";

export default function Historico() {
    return (
        <StyleHistoric>
            <Header />
            <main>
                <div className="topo">
                    <h1>Histórico</h1>
                    <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                    </p>
                </div>
            </main>
            <Footer />
        </StyleHistoric>
    )
}