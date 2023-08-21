import React from 'react'
import parte from '../Image_Components/Card Images/participation.png'
import host from '../Image_Components/Card Images/layers.png'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
    let navigate = useNavigate()
    return (
        <>
            <div data-auth-choose>
                <h1>Choose Your Role</h1>
                <div data-auth-master>
                    <div data-auth-divider onClick={() => { navigate('/host/login') }}>
                        <img src={host} alt="" />
                        <h3>Host</h3>
                    </div>
                    <div data-auth-fake></div>
                    <div data-auth-divider onClick={() => { navigate('/participate/login') }}>
                        <img src={parte} alt="" />
                        <h3>Participate</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication