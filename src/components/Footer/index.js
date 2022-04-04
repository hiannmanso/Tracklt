import { Link } from 'react-router-dom'
import { buildStyles } from "react-circular-progressbar";
import { useContext } from 'react'
import "react-circular-progressbar/dist/styles.css";
import * as style from './style'
import userContext from './../../Context/userContext'

export default function Footer() {
    const { habitsLength, habitschecked } = useContext(userContext)
    let percents = (habitschecked / habitsLength) * 100
    return (
        <>
            <style.Footer>
                <Link to='/habits'>Hábitos</Link>
                <Link to='/today'>
                    <style.Circle
                        value={percents}
                        text={'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })} />

                </Link>


                <Link to='/history'>Histórico</Link>

            </style.Footer>
        </>
    )
}