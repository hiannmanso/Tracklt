import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Login from "../Pages/Login"
import SignIn from '../Pages/SignIn'
import Habits from '../Pages/Habits'
import Today from '../Pages/Today'
import History from '../Pages/History'
import userContext from '../Context/userContext'

export default function App() {
    const [infoUser, setInfoUser] = useState('');
    const [habits,setHabits] = useState([])
    const [habitsLength,setHabitsLength] = useState(1);
    const [habitschecked,setHabitsChecked]  = useState(0);
    
    
    return (
        <BrowserRouter>
            <userContext.Provider value={{ infoUser, setInfoUser, habits, setHabits,habitsLength,setHabitsLength,habitschecked,setHabitsChecked}}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<SignIn />} />
                    <Route path='/habits' element={<Habits />} />
                    <Route path='/today' element={<Today />} />
                    <Route path='/history' element={<History />} />

                </Routes>

            </userContext.Provider>

        </BrowserRouter>
    )
}