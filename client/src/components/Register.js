import {useState} from 'react'
import Header from './Header'

function Register({onReg}) {
    const [username,setUname]=useState('')
    const [password,setPwd]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)

    const onSubmit=(e)=>{
        e.preventDefault()
        onReg({username,password,name,age})
        setUname('')
        setPwd('')
        setName('')
        setAge(0)
    }
    return (
        <div>
            <Header title="Registration Form" />
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>User Name</label>
                    <input type='text' placeholder='User Name'
                    value={username} onChange={(e)=>setUname(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Password' value={password} onChange={(e)=>setPwd(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' placeholder='Name'
                    value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Age</label>
                    <input type='text' placeholder='age'
                    value={age} onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <input type='submit' value='Register' className='btn btn-block' ></input>
            </form>
        </div>
    )
}
export default Register
