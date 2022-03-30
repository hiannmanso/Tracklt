import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "../Pages/Login"
import SignIn from '../Pages/SignIn'
import Habits from '../Pages/Habits'
import Today from '../Pages/Today'
import History  from '../Pages/History'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<SignIn />} />
                <Route path='/habits' element={<Habits />} />
                <Route path='/today' element={<Today />}/>
                <Route path='/history' element={<History />}/>

        </Routes>

        </BrowserRouter>
    )
}