import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import userContext from '../../Context/userContext'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FallingLines } from 'react-loader-spinner'

import treshIcon from './../../assets/Vector(6).svg'
import * as style from './style'
import icon from '../../assets/+.svg'

export default function HabitsList() {
    const { infoUser, habits, setHabits } = useContext(userContext);
    const [createNewHabit, setCreateNewHabit] = useState(false)
    const [newHabit, setNewHabit] = useState({
        name: undefined,
        days: [],
    })
    const [msgInput, setMsgInput] = useState('Salvar')
    const loadingInput = <FallingLines width="45" color='#126BA5' />
    const [isDisabled, setIsDisabled] = useState(false)
    const [newHabitDetected, setnewHabitDetected] = useState(false)

    let week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function selectWeekDay(item) {
        if (item.className === 'selected') {
            item.className = 'unselected'
        } else {
            item.className = 'selected'

        }
        console.log(item)

    }

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
    }, [newHabitDetected])

    function addNewDay(day) {
        console.log(newHabit.days)
        if (newHabit.days.includes(day)) {
            const index = newHabit.days.indexOf(day);
            if (index > -1) {
                newHabit.days.splice(index, 1);
            }
        } else {
          
            setNewHabit({ ...newHabit, days: [...newHabit.days, day] })
        }
    }

    function sendNewHabit() {
        setMsgInput(loadingInput)
        setIsDisabled(true)
        setnewHabitDetected(!newHabitDetected)

        axios({
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
            data: newHabit
        }).then(response => {
            toast.success('novo hábito adicionado!')
            setIsDisabled(false)
            setNewHabit({name:'', days:[]})
            setCreateNewHabit(false)
            setMsgInput('Salvar')


        }).catch(err => {
            console.log(err)
            toast.warn('hábito não adicionado! por favor preencha todas as informações.')
            setIsDisabled(false)
            setCreateNewHabit(false)
            setNewHabit({name:'', days:[]})
            setMsgInput('Salvar')
        })

    }
    function deletHabit(id) {
  
        const deletitem = window.confirm('Tem certeza que deseja deletar esse hábito?')
        if(deletitem){
            setnewHabitDetected(!newHabitDetected)
            axios({
                method: 'delete',
                url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                headers: {
                    "Authorization": `Bearer ${infoUser.token}`
                },
            }).then(response => {
                console.log(response)
                toast.success('item deletado!')
                setnewHabitDetected(!newHabitDetected)
            }).catch(err => { console.log(err) })
        }
    }


    return (
        <style.ContainerHabits>
            <ToastContainer />
            <style.HeaderHabits>
                <h1>Meus hábitos</h1>
                <div className="containerImg" onClick={() => {
                    setCreateNewHabit(true)

                }}>
                    <img src={icon} alt='' />
                </div>
            </style.HeaderHabits>
            <style.BodyHabits>
                {createNewHabit === true ?
                    <style.NewHabit>
                        <input type='text' placeholder="nome do hábito" onChange={(e) => {
                            setNewHabit({ ...newHabit, name: e.target.value })

                        }} disabled={isDisabled} />
                        <style.Days>
                            {week.map((item, index) => {
                                return (
                                    <style.Day
                                        key={index} name={false}
                                        onClick={(e) => {
                                            addNewDay(e.target.id)
                                            
                                            // setNewHabit({ ...newHabit, days: [...newHabit.days, e.target.id] })
                                            selectWeekDay(e.target)
                                        }}
                                        id={index}
                                        bg={'FFFFFF'}>{item}
                                    </style.Day>
                                )
                            })}
                        </style.Days>
                        <style.ButtonsNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                toast.error('cancelado!')
                                setCreateNewHabit(false)
                            }
                            } Bgcolor='none' font='#52B6FF;' positionBotton='15px' positionRight='123px' disabled={isDisabled}>
                                Cancelar
                            </style.ButtonNewHabit>

                            <style.ButtonNewHabit onClick={() => {
                                sendNewHabit()


                            }} Bgcolor='#52B6FF;' font='#FFFFFF;' positionBotton='15px' positionRight='16px' disabled={isDisabled}>
                                {msgInput}
                            </style.ButtonNewHabit >
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
                                            <style.Day key={index} id={index} bg={item.days.includes(index) ? '#126BA5' : '#FFFFFF'}>{day}</style.Day>
                                        )
                                    })}
                                </div>
                                <img onClick={() => deletHabit(item.id)} className='icon' src={treshIcon} alt='nothing' />
                            </style.Habit>
                        )
                    })
                }

            </style.BodyHabits>

        </style.ContainerHabits>
    )
}