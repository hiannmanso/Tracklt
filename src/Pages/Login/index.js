import { Link ,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import * as styled from './style'
import logoTracklt from './../../assets/Group 8.svg'

export default function Login() {
    const navigate = useNavigate()
    const [dataUser, setDataUser] = useState({
        email: '',
        password: '',
    })
    function loginUser() {
        axios({
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            data: dataUser
        }).then(response => {
            console.log(response.data)
            setDataUser({
                email: '',
                password: '',
            })
        }).catch(err => {
            console.log(err)
            setDataUser({
                email: '',
                password: '',
            })
        })
    }
    return (
        <>
            <styled.Log>
                <img src={logoTracklt} alt='logo' />
                <div className='inputsLogin'>
                    <input type='text' placeholder='email' value={dataUser.email} onChange={
                        e => { setDataUser({ ...dataUser, email: e.target.value }) }} />
                    <input type='password' placeholder='password' value={dataUser.password} onChange={
                        e => { setDataUser({ ...dataUser, password: e.target.value }) }} />

                </div>
                <button className='btnLogin' onClick={loginUser}>Entrar</button>
                <Link to='/register' className='signinLink'>Não tem uma conta? Cadastre-se!</Link>

            </styled.Log>

        </>
    )
}