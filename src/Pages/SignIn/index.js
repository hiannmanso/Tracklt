import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { InfinitySpin,FallingLines  } from 'react-loader-spinner'

import 'react-toastify/dist/ReactToastify.css'

import * as styled from './style'
import logoTracklt from './../../assets/Group 8.svg'

export default function SignIn() {
    const navegation = useNavigate()
    // const notify = (mensage) => toast.success(mensage);
    const [mensage, setMensage] = useState('')
    const [dataUser, setDataUser] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    })
    const [msgInput,setMsgInput] = useState('Cadastrar')
    const loadingInput = <FallingLines width="45" color='#126BA5'/> 
    const [isDisabled,setIsDisabled] = useState(false)

    function registerNewUser(e) {
        e.preventDefault()
        setMsgInput(loadingInput)
        setIsDisabled(true)
        axios({
            method: 'post',
            url: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
            data: dataUser,
        }).then(response => {
            console.log(response.data)
            toast.success('cadastro feito com sucesso!')
            setDataUser({
                email: '',
                name: '',
                image: '',
                password: '',
            })
            setMsgInput('Cadastrar')
            setIsDisabled(false)
            setInterval(() => navegation('/'), 2000)


        }).catch(err => {
            toast.warn('preencha com dados válidos.')
            console.log(err)
            setMsgInput('Cadastrar')
            setIsDisabled(false)

            setDataUser({
                email: '',
                name: '',
                image: '',
                password: '',
            })
        })

    }

    return (
        <>
            <styled.Log>
                <img src={logoTracklt} alt='logo' />
                <form className='inputsLogin' onSubmit={registerNewUser}>
                    
                    <input type='email' placeholder='email' value={dataUser.email} onChange={
                        (e) => setDataUser({ ...dataUser, email: e.target.value })}  disabled={isDisabled}/>

                    <input type='password' placeholder='password' value={dataUser.password} onChange={
                        (e) => setDataUser({ ...dataUser, password: e.target.value })} disabled={isDisabled} />

                    <input type='text' placeholder='name' value={dataUser.name} onChange={
                        (e) => setDataUser({ ...dataUser, name: e.target.value })}  disabled={isDisabled}/>

                    <input type='url' placeholder='picture' value={dataUser.image} onChange={
                        (e) => setDataUser({ ...dataUser, image: e.target.value })}  disabled={isDisabled}/>

                    {dataUser.email != '' && dataUser.name != '' && dataUser.image != '' && dataUser.password != '' ? <button type='submit' className='btnLogin' >{msgInput}</button> : <button type='submit' className='btnLogin'  disabled>Cadastrar</button>}

                </form>
                <ToastContainer />
                <Link to='/' className='signinLink'>Já tem uma conta? Faça login!</Link>

            </styled.Log>

        </>
    )
}