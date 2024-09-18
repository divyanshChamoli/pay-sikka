import { BrowserRouter,Routes ,Route, Link } from "react-router-dom"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import SendMoney from "./Pages/SendMoney"
import Heading from "./Components/Heading"
import SubHeading from "./Components/SubHeading"
import BottomWarning from "./Components/BottomWarning"
import InputBox from "./Components/InputBox"
import Button from "./Components/Button"
import UserIcon from "./Components/UserIcon"

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
