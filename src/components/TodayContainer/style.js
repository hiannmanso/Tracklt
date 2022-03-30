import styled from 'styled-components'


export const ContainerToday = styled.div`
    box-sizing: border-box;
    background: #E5E5E5;
    height: 100vh;
    margin: 70px 0 70px;
`
export const HeaderToday = styled.div`
    padding: 28px 0 28px 17px;
    box-sizing: border-box;
    h1{
       
        min-width: 172px;
        height: 29px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;
    }
    h2{
        min-width: 238px;
        height: 22px;
        display: flex;
        flex-wrap: wrap;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #8FC549;
    }
`

export const Habit = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: calc(100% - 35px);
        height: 94px;
        padding: 13px 13px 12px 15px;
        margin: 0 17px 10px 18px;
        background: #FFFFFF;
        border-radius: 5px;
        h1{
            width: 208px;
            height: 25px;
            left: 33px;
            top: 190px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            /* identical to box height */


            color: #666666;
        }
        p{
            width: 146px;
            height: 32px;
            left: 33px;
            top: 222px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;

            color: #666666;
        }
`
export const ContainerImg = styled.div`
    width: 69px;
    height: 69px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
`