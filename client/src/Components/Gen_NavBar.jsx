import React,{useState} from 'react'
import logo from '../Image_Components/Logo.png'
import { useNavigate } from 'react-router-dom'

const Gen_NavBar = () => {

    let navigate = useNavigate();

    let [value, setValue] = useState(false)

    const colorChanger = () =>{
        if(window.scrollY>100){
            setValue(true)
        }
        else{
            setValue(false)
        }
    }

    window.addEventListener('scroll',colorChanger)

    return (
        <>
            <div className="nav" data-nav data-y-axis={value}>
                <div className="logo" data-nav-logo>
                    <img src={logo} alt="" />
                </div>
                <div className="manu">
                    <ul className="list" data-nav-style-ul>
                        <li className="ele" data-nav-li>InDoor Games</li>
                        <li className="ele" data-nav-li>OutDoor Games</li>
                        <li className="ele" data-nav-li>E-Sports</li>
                        <li className="ele" data-nav-li>Hackathon</li>
                        <li className="ele" data-nav-li>Coding</li>
                        <li className="ele" data-nav-li>Quiz</li>
                    </ul>
                </div>
                <div className="action" data-nav-botton>
                    <button>Host</button>
                    <button data-nav-button-login onClick={()=>{navigate("/auth")}}>Log In/Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Gen_NavBar