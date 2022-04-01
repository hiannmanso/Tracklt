import styled from 'styled-components'
import { CircularProgressbar } from "react-circular-progressbar";


export const Footer = styled.footer`
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 31px 0 36px;
    align-items: center;
    a{
    
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;

    }
`
export const Circle = styled(CircularProgressbar)`
    width: 91px;

    overflow-y: visible;
    margin-bottom: 35px;

`