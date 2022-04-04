import certinho from './../../assets/Vector(5).svg'
import * as style from './style'
import dayjs from 'dayjs'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import userContext from './../../Context/userContext'

export default function TodayContainer() {
    const { infoUser, habitsLength, habitschecked, setHabitsChecked, setHabitsLength } = useContext(userContext)

    const [dailyHabits, setDailyHabits] = useState()
    const [isBoolean, setIsBoolean] = useState(false)
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let day = dayjs().format('DD/MM')
    // const [habitsLength,setHabitsLength] = useState(1);
    // const [habitschecked,setHabitsChecked]  = useState(0);
    
    const [cont, setCont] = useState(0);
    const [percents, setPercents] = useState(0);
    // let percents = (habitschecked / habitsLength) * 100

    useEffect(() => {

        setPercents((habitschecked / habitsLength) * 100)

    }, [habitschecked])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            },
        }).then(response => {
            setDailyHabits(response.data)
            setHabitsLength(response.data.length)
            console.log(response.data)
            let count = 0;
            for (let item of response.data) {

                if (item.done) {
                    count ++
                    console.log(count)
                }
            }
            setHabitsChecked(count)
        }
        ).catch(err => { console.log(err) })

    }, [isBoolean])

    function checkHabit(id, done) {
        setIsBoolean(!isBoolean)
        // console.log(habitsLength, ' checked:', habitschecked, 'cont', cont, 'percents', percents)

        if (done) {
            axios({
                method: 'post',
                url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
                headers: {
                    "Authorization": `Bearer ${infoUser.token}`
                },
            }).then(response => {
                console.log(response.data)
                // { habitschecked == 0 ? <></> : setHabitsChecked(habitschecked - 1) }
                for (let item of response.data) {
                    if (item.done) {
                        setCont(cont + 1)
                    }
                }
                // setHabiCtshecked(cont)


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
                // setHabitsChecked(habitschecked + 1)
                for (let item of response.data) {
                    if (item.done) {
                        setCont(cont - 1)
                    }
                }
                setHabitsChecked(cont)

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

                {/* console.log(habitsLength,' checked:',habitschecked, 'cont' , cont, 'percents', percents) */}
                {habitschecked ? <h2>{percents.toFixed(2)}% dos habitos concluídos! </h2> : <h2>Nenhum hábito concluído ainda</h2>}
                {/* {habitsDone == 0 ? <FallingLines width="110" color='#126BA5' /> : <h2>{percents} dos hábitos concluídos!</h2>} */}

            </style.HeaderToday>
            <div>
                {dailyHabits ? dailyHabits.map((item) => {
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