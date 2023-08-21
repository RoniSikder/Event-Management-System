import Authentication from "./Pages/Authentication"
import Gen_Home from "./Pages/Gen_Home"
import { Routes, Route } from "react-router-dom"
import Sub_Routes from "./Sub_Routes"

function App() {

  return (
    <>
    <Sub_Routes/>
      <Routes>
        <Route path='/' element={<Gen_Home />}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Routes>
    </>
  )
}

export default App
