import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
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
    function registerNewUser() {
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
            setInterval(() => navegation('/'), 2000)


        }).catch(err => {
            toast.warn('preencha com dados válidos.')
            console.log(err)

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
                <div className='inputsLogin'>
                    <input type='text' placeholder='email' value={dataUser.email} onChange={
                        (e) => setDataUser({ ...dataUser, email: e.target.value })} />

                    <input type='password' placeholder='password' value={dataUser.password} onChange={
                        (e) => setDataUser({ ...dataUser, password: e.target.value })} />

                    <input type='text' placeholder='name' value={dataUser.name} onChange={
                        (e) => setDataUser({ ...dataUser, name: e.target.value })} />

                    <input type='text' placeholder='picture' value={dataUser.image} onChange={
                        (e) => setDataUser({ ...dataUser, image: e.target.value })} />


                </div>
                <ToastContainer />
                {dataUser.email != '' && dataUser.name != '' && dataUser.image != '' && dataUser.password != '' ? <button className='btnLogin' onClick={registerNewUser}>Cadastrar</button> : <button className='btnLogin' onClick={registerNewUser} disabled>Cadastrar</button>}
                <Link to='/' className='signinLink'>Já tem uma conta? Faça login!</Link>

            </styled.Log>

        </>
    )
}