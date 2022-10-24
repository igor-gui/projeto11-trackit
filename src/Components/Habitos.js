import Footer from "./Footer"
import Header from "./Header"
import { StyleHabits } from "./styledComponents"



export default function Habitos() {
    return (
        <StyleHabits>
            <Header />

            <main>
                <div className="topo">
                <h1>Meus hábitos</h1>   <button>+</button>
                </div>
                <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </main>

            <Footer />
        </StyleHabits>
    )
}