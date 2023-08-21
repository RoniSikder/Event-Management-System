import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Per_LogIn from './Components/Per_LogIn'
import Host_LogIn from './Components/Host_LogIn'
import Per_Signup from './Components/Per_Signup'
import Host_Signup from './Components/Host_Signup'
import Category_Event from './Components/Category_Event'

const Sub_Routes = () => {
    return (
        <>
            <Routes>
                <Route path='/participate/login' element={<Per_LogIn/>}/>
                <Route path='/participate/signup' element={<Per_Signup/>}/>
                <Route path='/host/login' element={<Host_LogIn/>}/>
                <Route path='/host/signup' element={<Host_Signup/>}/>
                <Route path='/host/eventselection' element={<Category_Event/>}/>
            </Routes>
        </>
    )
}

export default Sub_Routes