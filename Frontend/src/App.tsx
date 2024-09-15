import { BrowserRouter,Routes ,Route } from "react-router-dom"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Send from "./Pages/Send"

function App() {
  
  return (
    <>  
      PaySikka
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<Send/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
