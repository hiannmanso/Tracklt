import styled from 'styled-components'




export const ContainerHabits = styled.div`
    box-sizing: border-box;
    background: #E5E5E5;
    margin:70px 0 70px;
    height: calc(100vh - 140px);
    overflow-y: scroll;
    
    `
export const HeaderHabits = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 21px 18px 0 17px;
    .containerImg{
        width: 40px;
        height: 35px;
        
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .containerImg img{
        width: 16px;
        height: 34px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
    h1{
        width: 148px;
        height: 29px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`
export const BodyHabits = styled.div`

    margin: 28px 20px 0 70px;
    h1{
       
        height: 74px;
        text-align:justify;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;

    }
`

export const NewHabit = styled.div`
    position: relative;
    box-sizing: border-box;
    width: calc(100% - 35px);
    height: 180px;
    
    margin: 20px 18px 29px 17px;

    background: #FFFFFF;
    border-radius: 5px;
    input{
        width: calc(100% - 37px);
        height: 45px;
        padding: 9px 0 11px 11px;
        margin: 18px 18px 8px 19px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */


        color: #DBDBDB;

    }
`
export const Days = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 0 29px 19px;
    `
export const Day = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
    background: ${props => props.bg};
    color: #DBDBDB;
    :hover{
        background: #126BA5;
    }
`

export const ButtonsNewHabit = styled.div`
    display: flex;
    flex-direction: row;
`
export const ButtonNewHabit = styled.div`
    width: 84px;
    height: 35px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;

    color: ${props => props.font};
    
    background: ${props => props.Bgcolor};
    border-radius: 4.63636px;

    position: absolute;
    bottom: ${props => props.positionBotton};
    right:${props => props.positionRight};
`

export const Habit = styled.div`
    position: relative;
    width: calc(100% -35px);
    margin: 0 18px 10px 17px;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom:10px;
    .titleHabit{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        height: auto;
        margin: 13px 0 8px 15px;
    }
    .days{
        display: flex;
        flex-direction: row;
        margin: 0 0 15px 14px;
    }
    .icon{
        height: 15px;
        width: 13px;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`