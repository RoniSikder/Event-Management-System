import Host_Routes from "./Routes/Host_Routes"
import Participate_Routes from "./Routes/Participate_Routes"
import Guest_Routes from "./Routes/Guest_Routes"

function App() {

  return (
    <>
      <Guest_Routes />
      <Host_Routes />
      <Participate_Routes />
    </>
  )
}

export default App
