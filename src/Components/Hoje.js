import Habito from "./Habito";
import Footer from "./Footer";
import { HojeStyle } from "./styledComponents";
import Header from "./Header";






export default function Hoje() {
    return (
        <HojeStyle>
            <Header />
            <main>
                <h1>Segunda, 17/05</h1>
                <h3>Nenhum hábito concluído ainda</h3>
                <div className="habitos">
                    <Habito />
                    <Habito />
                    <Habito />
                </div>
            </main>
            
            <Footer />
        </HojeStyle>

    )
}