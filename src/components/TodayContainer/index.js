import certinho from './../../assets/Vector(5).svg'
import * as style from './style'

export default function TodayContainer() {
    return (
        <style.ContainerToday>
            <style.HeaderToday>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </style.HeaderToday>
            <div>
                <style.Habit>
                    <div>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: 3 dias <br /> Seu recorde: 5 dias</p>
                    </div>
                    <style.ContainerImg>
                        <img src={certinho} alt='' />

                    </style.ContainerImg>
                </style.Habit>
            </div>
        </style.ContainerToday>
    )
}