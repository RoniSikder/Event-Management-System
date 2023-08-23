import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Host_Signup = () => {
    const first_name = useRef()
    const last_name = useRef()
    const phone = useRef()
    const email = useRef()
    const password = useRef()
    const conform_password = useRef()
    const username = useRef()
    const otp = useRef()
    let navigate = useNavigate();
    let [toster,setToster] = useState(false)
    let [otp_hider, setotp] = useState(false);
    function sender_function(e) {
        e.preventDefault();
        const url = "http://localhost:1000/host/otp"
        const email_sender = email.current.value
        const holder = field_Checker()
        console.log(holder)
        if (holder) {
            axios.post(url, { email: email_sender })
                .then((response) => {
                    console.log(response)
                    setotp(true);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            setToster(true)
        }
    }
    const field_Checker = () => {
        if (password.current.value === conform_password.current.value && password.current.value !== null && conform_password.current.value !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    const submit = (e) => {
        const url = "http://localhost:1000/host/signup"
        axios.post(url, {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            password: password.current.value,
            username: username.current.value,
            phone: phone.current.value,
            otp: otp.current.value
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <>
            <div data-auth-per-login>
                <div data-auth-form>
                    <div>
                        <h2 style={{ marginBottom: "7vh", textAlign: "center" }}>Welcome</h2>
                        <div data-signup-para>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" ref={first_name} className="form-control" id="floatingInput1" placeholder="name@example.com" />
                                <label htmlFor="floatingInput1">First Name</label>
                            </div>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" ref={last_name} className="form-control" id="floatingInput2" placeholder="name@example.com" />
                                <label htmlFor="floatingInput2">Last Name</label>
                            </div>
                        </div>
                        <div data-signup-para>
                            <div data-signup-para-sub>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="email" ref={username} className="form-control" id="floatingInput3" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput3">username</label>
                                </div>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="email" ref={phone} className="form-control" id="floatingInput4" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput4">Phone Number</label>
                                </div>
                            </div>
                            <div data-signup-para-sub>
                                <div className="form-floating mb-3" data-password-mismatch={toster} data-auth-input>
                                    <input type="password" ref={password} className="form-control"  id="floatingPassword5" placeholder="Password" />
                                    <label htmlFor="floatingPassword5">Password</label>
                                </div>
                                <div className="form-floating mb-3" data-password-mismatch={toster} data-auth-input>
                                    <input type="password" ref={conform_password}  className="form-control" id="floatingPassword6" placeholder="Password" />
                                    <label htmlFor="floatingPassword6">Confirm Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-3" data-auth-input>
                            <input type="email" ref={email} className="form-control" id="floatingInput7" placeholder="name@example.com" />
                            <label htmlFor="floatingInput7">Email address</label>
                        </div>
                        <button data-auth-button-hider={otp_hider} data-auth-button type="btn" onClick={sender_function}>Ask for OTP</button>
                        <div data-signup-otp={otp_hider}>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" ref={otp} className="form-control" id="floatingInput8" placeholder="name@example.com" />
                                <label htmlFor="floatingInput8">OTP</label>
                            </div>
                            <button data-auth-button onClick={()=>{submit()}} type="btn">Sign Up</button>
                        </div>
                        <div onClick={() => { navigate('/host/login') }} data-auth-link>
                            Already Have an Account, SignUp
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

export default Host_Signup