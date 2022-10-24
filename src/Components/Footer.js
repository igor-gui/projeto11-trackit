import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HojeImg from '../images/HojeImg.svg'


const StyledFooter = styled.footer`
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
    `


export default function Footer() {

    return (
        <StyledFooter>
            <Link to='/habitos' className="noSvg">Hábitos</Link>
            <Link to='hoje' className="svgLink"><img src={HojeImg} alt='' /></Link>
            <Link to='historico' className="noSvg">Histórico</Link>
        </StyledFooter>
    )
}