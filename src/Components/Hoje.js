import Habito from "./Habito";
import Footer from "./Footer";
import { HojeStyle } from "./styledComponents";






export default function Hoje() {
    return (
        <HojeStyle>
            <header>
                <h1>TrackIt</h1>    <img src='http://s2.glbimg.com/lTUhRSG_HLiZm_hnV0PtPVRY1dw=/e.glbimg.com/og/ed/f/original/2016/04/05/2c.jpg' alt='' />
            </header>
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