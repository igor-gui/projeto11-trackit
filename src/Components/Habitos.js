import { Link } from "react-router-dom"
import { StyleHabits } from "./styledComponents"
import HojeImg from '../images/HojeImg.svg'



export default function Habitos() {
    return (
        <StyleHabits>
            <header>
                <h1>TrackIt</h1>    <img src='http://s2.glbimg.com/lTUhRSG_HLiZm_hnV0PtPVRY1dw=/e.glbimg.com/og/ed/f/original/2016/04/05/2c.jpg' alt='' />
            </header>

            <main>
                <div className="topo">
                <h1>Meus hábitos</h1>   <button>+</button>
                </div>
                <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </main>

            <footer>
                <Link to='/habitos' className="noSvg">Hábitos</Link>
                <Link to='hoje' className="svgLink"><img src={HojeImg} alt=''/></Link>
                <Link to='historico' className="noSvg">Histórico</Link>
            </footer>
        </StyleHabits>
    )
}