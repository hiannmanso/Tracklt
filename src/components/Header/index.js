import tracklt from "./../../assets/TrackIt.svg"
import bob from './../../assets/Rectangle 14.svg'
import * as style from "./style"

import { useContext } from 'react'
import userContext from "../../Context/userContext"

export default function Header() {
    const {infoUser} = useContext(userContext)
    return (
        <>
            <style.Head>
              <img className="logo" src={tracklt} alt='logoTracklt'/>    
              <img className="imgHeader" src={infoUser.image} alt='bob'/>    
            </style.Head>
        </>
    )
}
