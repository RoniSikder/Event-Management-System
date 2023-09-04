import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Per_LogIn from '../Components/Per_LogIn'
import Per_Signup from '../Components/Per_Signup'

const Participate_Routes = () => {
    return (
        <Routes>
            <Route path='/participate/login' element={<Per_LogIn />} />
            <Route path='/participate/signup' element={<Per_Signup />} />
        </Routes>
    )
}

export default Participate_Routes