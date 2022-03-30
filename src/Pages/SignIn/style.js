import styled from 'styled-components'


export const Log = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .inputsLogin{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    img{
        width:180px;
        height: 178.38px;
        margin: 68px 0 32.62px;
    }
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
    }
    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding: 9px 0 11px 11px;
        color: #DBDBDB;
    }
    .btnLogin{
        width: 303px;
        height: 45px;
        
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        margin-bottom: 25px;
        color: #FFFFFF;
        animation-duration:1s;
    }
    .btnLogin:disabled{
        background: gray;
    }
    .signinLink{
        width: 232px;
        height: 17px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`