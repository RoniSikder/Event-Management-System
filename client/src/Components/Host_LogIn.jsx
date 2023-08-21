import React from 'react'
import { useNavigate } from 'react-router-dom'

const Host_LogIn = () => {

  let navigate = useNavigate()

  return (
    <>
      <div data-auth-per-login>
        <div data-auth-form>
          <div>
            <h2 style={{marginBottom:"7vh",textAlign:"center"}}>Welcome Back</h2>
            <div className="form-floating mb-3" data-auth-input>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating" data-auth-input>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button data-auth-button type="btn">Login</button>
            <div onClick={()=>{navigate('/host/signup')}} data-auth-link>
              Don't Have Account, Create One
            </div>
          </div>
        </div>
        <div data-auth-img>
          <img src="https://source.unsplash.com/random?wallpapers" alt="" />
        </div>
      </div>
    </>
  )
}

export default Host_LogIn