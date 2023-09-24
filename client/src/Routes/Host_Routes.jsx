import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../Components/Route_Protection'

import Host_LogIn from '../Components/Host_LogIn'
import Host_Signup from '../Components/Host_Signup'
import Category_Event from '../Components/Category_Event'
import Host_DashBoard from '../Pages/Host_DashBoard'
import Host_Event_Details from '../Components/Host_Event_Details'
import Host_Dashboard_Component from '../Components/Host_Dashboard_Component'


const Host_Routes = () => {
    let [dash,setDash] = useState({
        name:"DashBoard",
        component:<Host_Dashboard_Component/>
    })
    return (
        <Routes>
            <Route path='/host/login' element={<Host_LogIn />} />
            <Route path='/host/signup' element={<Host_Signup />} />
            <Route path='/host/signup2form' element={<ProtectedRoutes component={Category_Event} />} />
            <Route path='/host/dashboard' element={<ProtectedRoutes component={Host_DashBoard} dash={dash}/>}/>
            <Route path='/host/createlaststep' element={<ProtectedRoutes component={Host_Event_Details} setDash={setDash}/>}/>
        </Routes>

    )
}

export default Host_Routes