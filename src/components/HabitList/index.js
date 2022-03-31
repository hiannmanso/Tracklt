import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import userContext from '../../Context/userContext'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

 import treshIcon from './../../assets/Vector(6).svg'
import * as style from './style'
import icon from '../../assets/+.svg'

export default function HabitsList() {
    const { infoUser, habits, setHabits } = useContext(userContext);

    const [changeCollor, setChangeCollor] = useState(false)
    const [createNewHabit, setCreateNewHabit] = useState(false)
    const [newHabit, setNewHabit] = useState({
        name: undefined,
        days: [],
    })
    let week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
        }).then(response => {
            setHabits(response.data)
            console.log(response.data)
        }).catch(err => console.log(err))
    }, [habits])

    function sendNewHabit() {
        axios({
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
            data: newHabit,
        }).then(response => {
            console.log(response)
            toast.success('novo hábito adicionado!')
            HabitsList()
        }).catch(err => {
            console.log(err)
            toast.warn('hábito não adicionado! por favor preencha todas as informações.')
            console.log(infoUser, ' ', newHabit)
        })

    }
    function deletHabit(id) {
        axios({
            method:'delete',
            url:`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
        }).then(response=>{
            console.log(response)
            toast.success('item deletado!')
        }).catch(err=>{console.log(err)})
    }


    return (
        <style.ContainerHabits>
            <ToastContainer />
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
                        <input type='text' placeholder="nome do hábito" onChange={(e) => {
                            setNewHabit({ ...newHabit, name: e.target.value })
                            console.log(newHabit)
                        }} />
                        <style.Days>
                            {week.map((item, index) => {
                                return (
                                    <style.Day key={index} onClick={(e) => {
                                        setNewHabit({ ...newHabit, days: [...newHabit.days, e.target.id] })
                                        setChangeCollor(true)
                                    }} id={index} bg={changeCollor ? '#126BA5' : 'FFFFFF'}>{item}</style.Day>
                                )
                            })}
                        </style.Days>
                        <style.ButtonsNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                toast.error('cancelado!')
                                setCreateNewHabit(false)
                            }
                            } Bgcolor='none' font='#52B6FF;' positionBotton='15px' positionRight='123px'>
                                Cancelar
                            </style.ButtonNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                sendNewHabit()

                                setCreateNewHabit(false)

                            }} Bgcolor='#52B6FF;' font='#FFFFFF;' positionBotton='15px' positionRight='16px'>
                                Salvar
                            </style.ButtonNewHabit>
                        </style.ButtonsNewHabit>
                    </style.NewHabit> : <></>
                }
                {habits.length === 0
                    ?
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                    :
                    habits.map((item, index) => {
                        return (
                            <style.Habit key={item.id}>
                                <h1 className='titleHabit'>{item.name}</h1>
                                <div className='days'>
                                    {week.map((day, index) => {

                                        return (
                                            <style.Day key ={index} id={index} bg={item.days.includes(index) ? '#126BA5' : '#FFFFFF'}>{day}</style.Day>
                                        )
                                    })}
                                </div>
                                <img onClick={()=>deletHabit(item.id)} className='icon' src={treshIcon} alt='nothing' />
                            </style.Habit>
                        )
                    })
                }

            </style.BodyHabits>

        </style.ContainerHabits>
    )
}