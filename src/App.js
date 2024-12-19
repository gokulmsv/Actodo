import Header from "./components/Header";
import Card from "./components/Card";
import Todo from "./components/TodoContainer";
import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing"

function App()
{

  
  let [users,setUsers] = useState(
    [
        {
            username:"john",
            password:"123"
        }
    ]
)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users = {users} setUsers = {setUsers} />}></Route>
        <Route path="/Signup" element={<Signup users = {users} setUsers = {setUsers}/>}></Route>
        <Route path="/Landing" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}


export default App;
