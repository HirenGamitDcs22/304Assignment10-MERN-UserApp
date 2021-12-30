import {useState, useEffect} from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users'

function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks] =useState([])
  const [users,setUsers]=useState([])

  useEffect(()=>{
    const getUser=async()=>{
      const res=await fetchUsers();
      console.log(res)
      setUsers([res])
    }
    getUser();
  },[])
  //fetch Users
  const fetchUsers=async()=>{
    const res=await fetch("/list");
    const data=await res.json();
    console.log(data)
    return data;
  }

  //Register User
  const register=async(user)=>{
    const res=await fetch("/registration",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const newUser= await res.json();
    setUsers([...users,newUser])
  }
  const login=(loginData)=>{
    console.log(users)

  }
  //Delete A Task
  const DeleteTask =async(id)=>{
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      });
      setTasks(tasks.filter((task)=>task.id !== id))
  }

  const featchTask=async(id)=>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`);
    const data=await res.json();
    return data;
  }
  //Toggle
  const toggleReminder =async(id)=>{
    const taskToToggle=await featchTask(id)
    const updateTask ={...taskToToggle,reminder:!taskToToggle.reminder}
    const res=await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateTask)
    })
    const data = await res.json();
    setTasks(tasks.map((task)=>task.id === id ?{...task,reminder:data.reminder} : task))
  }
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {<Register onReg={register} />}
                {users.length > 0 ? (
                  <Login></Login>
                ) : (
                  'No User To Show'
                )}
              </>
            }
          />
          <Route path='/about' />
        </Routes>
  
      </div>
    </Router>
  )
}

export default App
