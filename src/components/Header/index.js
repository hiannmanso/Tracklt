import tracklt from "./../../assets/TrackIt.svg"
import bob from './../../assets/Rectangle 14.svg'
import * as style from "./style"

export default function Header() {
    return (
        <>
            <style.Head>
              <img className="logo" src={tracklt} alt='logoTracklt'/>    
              <img className="imgHeader" src={bob} alt='bob'/>    
            </style.Head>
        </>
    )
}
