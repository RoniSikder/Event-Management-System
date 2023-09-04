import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Gen_Home from '../Pages/Gen_Home'
import Authentication from '../Pages/Authentication'

const Guest_Routes = () => {
  return (
    <Routes>
        <Route path='/' element={<Gen_Home/>}/>
        <Route path='/auth' element={<Authentication/>}/>
    </Routes>
  )
}

export default Guest_Routes