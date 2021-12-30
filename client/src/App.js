import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {BrowseRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    axios.get("/list").then(res=>{
      setUser(res.data)
    })
  },[])
  const register=async(newUser)=>{
    const res=await fetch("/registration",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    const user= await res.json();
    setUser(user.data)

  }
  const login=(loginData)=>{
    console.log(user)

  }
  return (
    <div className="container">
    {
      <Register onReg={register} />
    }
    {<Login  onLogin={login}/>}
      
    </div>
  )
}

export default App;
