import NavBar from '../NavBar/NavBar'
import './Login.module.css'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import IsAutorize from '../../actions/IsAutorize'
import { TextField, Button } from '@material-ui/core'
const Web3 = require('web3')

export default function Login() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [error, setError] = useState({ emailError: false, passError: false })

  const validateEmail = (input) => {
    return {
      error: !/\S+@\S+\.\S+/.test(input),
      message: !/\S+@\S+\.\S+/.test(input) ? 'Please enter a valid email' : '',
    }
  }

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    setError({
      emailError: validateEmail(inputs.email).error,
      passError: !inputs.password.length,
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    // despachar una accion que envie el objeto inputs al back
    setInputs({ email: '', password: '' })
    // redirigir a donde el usuario estaba antes
  }

  //para login con google
  const connect = async function () {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const web3 = new Web3(window.ethereum)
    } else {
      alert(' Please Install Metamask')
      window.open(
        'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
        '_blank'
      )
      /* window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"; */
    }
  }

  return (
    <div className='App'>
      <NavBar />
      <header className='App-header'>
        <h1>LOGIN</h1>
        <form action='' noValidate autoComplete='off' onSubmit={handleSubmit}>
          <div>
            <TextField
              onChange={(e) => handleChange(e)}
              error={error.emailError}
              id='email'
              name='email'
              label='E-mail'
              value={inputs.email}
              variant='outlined'
              helperText={validateEmail(inputs.email)?.message}
            />
          </div>
          <div>
            <TextField
              onChange={(e) => handleChange(e)}
              id='password'
              name='password'
              label='Password'
              value={inputs.password}
              variant='outlined'
              type='password'
            />
          </div>
          <div>
            <Button
              variant='contained'
              color='primary'
              disabled={!error.emailError && !error.passError ? false : true}
            >
              Login
            </Button>
          </div>
        </form>

        <div className='LoginDiv'>
          <h3>Login with google or MetaMask acount</h3>
          <button id='connect' onClick={connect}>
            MetaMask
          </button>
          <button
            onClick={() => {
              dispatch(IsAutorize())
            }}
          >
            Ingresar con Google
          </button>
        </div>
      </header>
    </div>
  )
}
