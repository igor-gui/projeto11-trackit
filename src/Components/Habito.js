import check from '../images/check.svg'
import styled from 'styled-components'

const HabitStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:35px;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    background-color: #FFFFFF;

    .textHabit{
        h3 {
        font-family: 'Lexend Deca';
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }
        h5 {
            font-family: 'Lexend Deca';
            font-size: 13px;
            font-weight: 400;
            color: #666666;
        }

    }

    button {
        height: 69px;
        width: 69px;
        border-radius: 5px;
        border: 1px solid #E7E7E7;
    }


`

export default function Habito() {
    return (
        <HabitStyle>
            <div className='textHabit'>
                <h3>Ler 1 capítulo de livro</h3>
                <h5>Sequência atual: 3 dias <br></br>Seu recorde: 5 dias</h5>
            </div>
            <button><img src={check} alt='' /></button>
        </HabitStyle>
    )
}