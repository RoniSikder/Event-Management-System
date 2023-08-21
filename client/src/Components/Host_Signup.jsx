import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Host_Signup = () => {

    let navigate = useNavigate();
    let [otp_hider, setotp] = useState(false);
    function sender_function(e) {
        e.preventDefault();
        setotp(true);
        console.log(otp_hider)
    }
    return (
        <>
            <div data-auth-per-login>
                <div data-auth-form>
                    <div>
                        <h2 style={{ marginBottom: "7vh", textAlign: "center" }}>Welcome</h2>
                        <div data-signup-para>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" />
                                <label htmlFor="floatingInput1">First Name</label>
                            </div>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" />
                                <label htmlFor="floatingInput2">Last Name</label>
                            </div>
                        </div>
                        <div data-signup-para>
                            <div data-signup-para-sub>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="email" className="form-control" id="floatingInput3" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput3">username</label>
                                </div>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="email" className="form-control" id="floatingInput4" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput4">Phone Number</label>
                                </div>
                            </div>
                            <div data-signup-para-sub>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="password" className="form-control" id="floatingPassword5" placeholder="Password" />
                                    <label htmlFor="floatingPassword5">Password</label>
                                </div>
                                <div className="form-floating mb-3" data-auth-input>
                                    <input type="password" className="form-control" id="floatingPassword6" placeholder="Password" />
                                    <label htmlFor="floatingPassword6">Confirm Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-3" data-auth-input>
                            <input type="email" className="form-control" id="floatingInput7" placeholder="name@example.com" />
                            <label htmlFor="floatingInput7">Email address</label>
                        </div>
                        <button data-auth-button-hider={otp_hider} data-auth-button type="btn" onClick={sender_function}>Ask for OTP</button>
                        <div data-signup-otp={otp_hider}>
                            <div className="form-floating mb-3" data-auth-input>
                                <input type="email" className="form-control" id="floatingInput8" placeholder="name@example.com" />
                                <label htmlFor="floatingInput8">OTP</label>
                            </div>
                            <button data-auth-button type="btn">Sign Up</button>
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