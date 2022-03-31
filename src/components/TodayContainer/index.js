import certinho from './../../assets/Vector(5).svg'
import * as style from './style'
import dayjs from 'dayjs'
import axios from 'axios'

import { useContext, useEffect, useState } from 'react'
import userContext from './../../Context/userContext'

export default function TodayContainer() {
    const { infoUser } = useContext(userContext)
    
    const [dailyHabits, setDailyHabits] = useState()

    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let day = dayjs().format('DD/MM')


    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
        }).then(response => {
            setDailyHabits(response.data)
            console.log(response.data)
        }
        ).catch(err => { console.log(err) })

    }, [dailyHabits])
    function checkHabit(id, done) {
        if (done) {
            axios({
                method: 'post',
                url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                headers: {
                    "Authorization": `Bearer ${infoUser.token}`
                },
            }).then(response => {
                console.log(response.data)
            }).catch(err => {
                console.log(err)
                console.log(id)
            })
        } else {
            axios({
                method: 'post',
                url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
                headers: {
                    "Authorization": `Bearer ${infoUser.token}`
                },
            }).then(response => {
                console.log(response.data)
            }).catch(err => {
                console.log(err)
                console.log(id)
            })
        }
    }

    return (
        <style.ContainerToday>
            <style.HeaderToday>
                <h1>{weekdays[dayjs().day()]}, {day}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </style.HeaderToday>
            <div>
                {dailyHabits ? dailyHabits.map((item) => {
                    return (
                        <style.Habit>
                            <div key={item.id}>
                                <h1>{item.name}</h1>
                                <p>Sequência atual:{item.currentSequence}<br /> Seu recorde:{item.highestSequence}</p>
                            </div>
                            <style.ContainerImg background={item.done ? '#8FC549;' : '#EBEBEB'} onClick={() => { checkHabit(item.id, item.done) }}>
                                <img src={certinho} alt='' />

                            </style.ContainerImg>
                        </style.Habit>

                    )

                }) : <>Loading</>}
            </div>
        </style.ContainerToday>
    )
}