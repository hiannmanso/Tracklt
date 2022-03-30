import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Login from "../Pages/Login"
import SignIn from '../Pages/SignIn'
import Habits from '../Pages/Habits'

export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<SignIn/>}/>
            <Route path='/habits' element={<Habits/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}