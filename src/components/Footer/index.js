import { Link } from 'react-router-dom'
import { buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import * as style from './style'

export default function Footer() {
    return (
        <>
            <style.Footer>
                <Link to='/habits'>Hábitos</Link>
                <Link to='/today'>
                    <style.Circle
                            value={60}
                            text={'Hoje'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}/>

                    </Link>


                <Link to='/history'>Histórico</Link>

            </style.Footer>
        </>
    )
}