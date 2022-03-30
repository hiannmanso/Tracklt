import Habits from "../../Pages/Habits";
import * as style from './style'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import icon from '../../assets/+.svg'

export default function HabitsList() {
    const [habits, setHabits] = useState([])
    const [createNewHabit, setCreateNewHabit] = useState(false)

    return (
        <style.ContainerHabits>
            <ToastContainer/>
            <style.HeaderHabits>
                <h1>Meus hábitos</h1>
                <div className="containerImg" onClick={() => {
                    setCreateNewHabit(true)
                    console.log('click')
                }}>
                    <img src={icon} alt='' />
                </div>
            </style.HeaderHabits>
            <style.BodyHabits>
                {createNewHabit === true ?
                    <style.NewHabit>
                        <input type='text' placeholder="nome do hábito" />
                        <style.Days>
                            <style.Day bg='#FFFFFF;'>D</style.Day>
                            <style.Day bg='#CFCFCF;'>S</style.Day>
                            <style.Day bg='#FFFFFF;'>T</style.Day>
                            <style.Day bg='#CFCFCF;'>Q</style.Day>
                            <style.Day bg='#FFFFFF;'>Q</style.Day>
                            <style.Day bg='#CFCFCF;'>S</style.Day>
                            <style.Day bg='#FFFFFF;'>S</style.Day>
                        </style.Days>
                        <style.ButtonsNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                toast.error('cancelado!') 
                                setCreateNewHabit(false)}
                            } Bgcolor='none' font='#52B6FF;' positionBotton='15px' positionRight='123px'>
                                Cancelar
                            </style.ButtonNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                toast.success('novo hábito adicionado!') 
                                setCreateNewHabit(false)}} Bgcolor='#52B6FF;' font='#FFFFFF;' positionBotton='15px' positionRight='16px'>
                                Salvar
                            </style.ButtonNewHabit>
                        </style.ButtonsNewHabit>
                    </style.NewHabit> : <></>
                }
                {habits.length === 0 ?
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                    : <></>}

            </style.BodyHabits>

        </style.ContainerHabits>
    )
}