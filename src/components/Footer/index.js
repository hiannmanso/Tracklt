import {Link} from 'react-router-dom'
import * as style from './style'

export default function Footer(){
    return(
        <>
            <style.Footer>
                <Link to='/habits'>Hábitos</Link>
                <Link to='/today'>Hoje</Link>
                <Link to='/history'>Histórico</Link>

            </style.Footer>
        </>
    )
}