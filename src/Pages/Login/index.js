import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import axios from 'axios'
import userContext from '../../Context/userContext'
import { FallingLines  } from 'react-loader-spinner'

import * as styled from './style'
import logoTracklt from './../../assets/Group 8.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    const navigate = useNavigate()
    const { setInfoUser } = useContext(userContext)
    const [dataUser, setDataUser] = useState({
        email: 'hiann@hiann.com',
        password: 'hiann123',
    })
    const [msgInput,setMsgInput] = useState('entrar')
    const loadingInput = <FallingLines width="45" color='#126BA5'/> 
    const [isDisabled,setIsDisabled] = useState(false)

    function loginUser(e) {
        e.preventDefault();
        setMsgInput(loadingInput)
        setIsDisabled(true)
        axios({
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
            data: dataUser
        }).then(response => {
            console.log(response.data)
            setInfoUser(response.data)
            setDataUser({
                email: '',
                password: '',
            })
            setMsgInput('Cadastrar')
            setIsDisabled(false)

            navigate('/habits')
        }).catch(err => {
            console.log(err)
            setMsgInput('Cadastrar')
            setIsDisabled(false)
            toast.warn('email ou senha incorretos, por favor preencha corretamente seus dados!')
            setDataUser({
                email: '',
                password: '',
            })
        })
    }
    return (
        <>
            <ToastContainer/>
            <styled.Log>
                <img src={logoTracklt} alt='logo' />
                <form className='inputsLogin' onSubmit={loginUser}>
                    <input type='text' placeholder='email' value={dataUser.email} onChange={
                        e => { setDataUser({ ...dataUser, email: e.target.value }) }} disabled={isDisabled}/>
                    <input type='password' placeholder='password' value={dataUser.password} onChange={
                        e => { setDataUser({ ...dataUser, password: e.target.value }) }} disabled={isDisabled}/>

                     <button className='btnLogin' type='submit'>{msgInput}</button>
                </form>
                <Link to='/register' className='signinLink'>Não tem uma conta? Cadastre-se!</Link>

            </styled.Log>

        </>
    )
}