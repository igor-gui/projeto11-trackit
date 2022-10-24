import styled from 'styled-components'


export const StyledLogin = styled.main`
    margin-top: 68px;
    min-height: 667px;
    width: 375px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: 180px;
        height: 178.38px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        margin-top: 32px;

        input {
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        padding-left: 11px;
        font-size: 20px;
        :placeholder{
            font-family: 'Lexend Deca';
            font-weight: 400;
        }
        
    }

        button {
            height: 45px;
            width: 303px;
            border-radius: 4.636363506317139px;
            background-color:  #52B6FF;
            border: 0;
            color: #FFFFFF;
            font-size: 20px;
        }
    }

    a {
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-size: 14px;
        font-weight: 400;
    }
`

export const StyledSignUp = styled.main`
margin-top: 68px;
min-height: 667px;
width: 375px;
display: flex;
align-items: center;
flex-direction: column;

img {
    width: 180px;
    height: 178.38px;
}

img {
        width: 180px;
        height: 178.38px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        margin-top: 32px;

        input {
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        padding-left: 11px;
        background-color: #FFFFFF;
        font-size: 20px;
        :placeholder{
            font-family: 'Lexend Deca';
            font-size: 20px;
            font-weight: 400;
            background-color: #DBDBDB;
        }
        
    }

        button {
            height: 45px;
            width: 303px;
            border-radius: 4.636363506317139px;
            background-color:  #52B6FF;
            border: 0;
            font-size: 20px;
            color: #FFFFFF;
        }
    }

    a {
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-size: 14px;
        font-weight: 400;
    }

`

export const StyledHabits = styled.main`

`

export const StyleHabits = styled.div`
    min-height: 644px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;

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
`

export const HojeStyle = styled.main`
    min-height: 644px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;

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

        .habitos {
            margin-top: 28px;
            display: flex;
            flex-direction: column;
            gap: 10px;
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
`

export const HeaderStyle = styled.header`

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
`    
