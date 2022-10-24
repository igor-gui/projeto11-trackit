import styled from "styled-components";
import Habito from "./Components/Habito";
import { StyleHabits } from "./Components/styledComponents";


const HojeStyle = styled.main`
    min-height: 644px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;


    header {
        position: fixed;
        top: 0;
        background-color: #126BA5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        width: 375px;
        box-sizing: border-box;
        padding-left: 18px;
        padding-right: 18px;
        h1 {
        font-family: 'Playball';
        font-size: 39px;
        font-weight: 400;
        text-align: left;
        color: #FFFFFF;
            }
        img {
        height: 51px;
        width: 51px;
        border-radius: 98.5px;
        }
    }

    main {
        box-sizing: border-box;
        padding-top: 22px;
        margin-top: 70px;
        min-height: 667px;
        .topo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 17px;
            h1{
                font-family: 'Lexend Deca';
                font-size: 23px;
                font-weight: 400;
                text-align: left;
                color: #126BA5;
            }
            button {
                height: 35px;
                width: 40px;
                border-radius: 4.636363506317139px;
                background-color: #52B6FF;
                border: 0;

                display: flex;
                justify-content: center;
                align-items: center;

                cursor: pointer;

                font-family: 'Lexend Deca';
                font-size: 27px;
                font-weight: 400;
                text-align: center;
                color: #FFFFFF;
            }
        }

        p {
            margin-top: 30px;
            font-family: 'Lexend Deca';
            font-size: 18px;
            font-weight: 400;
            text-align: left;
            color: #666666;
            margin-left: 17px;
        }
    }

    footer {
        position: fixed;
        height: 70px;
        width: 375px;
        bottom: 0;

        display: flex;
        justify-content: space-around;
        align-items: center;

        background-color: #FFFFFF;

        a {
            cursor: pointer;
        }

        .svgLink {
            margin-bottom: 30px;
        }

        .noSvg {
            text-decoration: none;
            font-family: 'Lexend Deca';
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            color: #52B6FF;
        }

        
    }
`


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
                </div>
            </main>
        </HojeStyle>

    )
}