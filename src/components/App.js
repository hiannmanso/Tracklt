import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Login from "./Login"
import SignIn from './SignIn'

export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<SignIn/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}