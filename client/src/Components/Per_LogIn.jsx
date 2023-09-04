import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Per_LogIn = () => {
  const email = useRef()
  const password = useRef()
  let navigate = useNavigate()
  const submit = () => {
    const url = 'http://localhost:1000/participate/login'
    axios.post(url, {
      email: email.current.value,
      password: password.current.value,
    })
      .then((res) => {
        sessionStorage.setItem(res.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <div data-auth-per-login>
        <div data-auth-img>
          <img src="https://source.unsplash.com/random?wallpapers" alt="" />
        </div>
        <div data-auth-form>
          <div>
            <h2 style={{ marginBottom: "7vh", textAlign: "center" }}>Welcome Back</h2>
            <div className="form-floating mb-3" data-auth-input>
              <input type="email" ref={email} className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating" data-auth-input>
              <input type="password" ref={password} className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button data-auth-button onClick={() => { submit() }} type="btn">Login</button>
            <div data-auth-link onClick={() => { navigate('/participate/signup') }}>
              Don't Have Account, Create One
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Per_LogIn