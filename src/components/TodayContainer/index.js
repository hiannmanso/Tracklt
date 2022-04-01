import certinho from './../../assets/Vector(5).svg'
import * as style from './style'
import dayjs from 'dayjs'
import axios from 'axios'
import { InfinitySpin,FallingLines  } from 'react-loader-spinner'
import { useContext, useEffect, useState } from 'react'
import userContext from './../../Context/userContext'

export default function TodayContainer() {
    const { infoUser } = useContext(userContext)

    const [dailyHabits, setDailyHabits] = useState()

    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let day = dayjs().format('DD/MM')
    let lengthHabits = 0
    let habitsDone = 0
    const [percents,setPercents] = useState((parseFloat(habitsDone) / parseFloat(lengthHabits)) * 100)
    // let percentsHabits = (parseFloat(habitsDone) / parseFloat(lengthHabits)) * 100

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
        }).then(response => {
            setDailyHabits(response.data)
            lengthHabits = (response.data.length)
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

                habitsDone -= 1

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
                habitsDone += 1
                console.log('habitos concluidos:', habitsDone, ' total de habitos:', lengthHabits, ' percents:', parseFloat(percents), typeof(habitsDone),typeof(lengthHabits))
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
                {habitsDone == 0 ? <FallingLines width="110" color='#126BA5'/>  : <h2>{percents} dos hábitos concluídos!</h2>}
                {/* <h2>Nenhum hábito concluído ainda</h2> */}
            </style.HeaderToday>
            <div>
                {dailyHabits ? dailyHabits.map((item) => {

                    { item.done ? habitsDone += 1 : <></> }
                    return (
                        <style.Habit key={item.id}>
                            <div>
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