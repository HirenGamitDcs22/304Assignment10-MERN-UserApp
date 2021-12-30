import {useState} from 'react'
import Header from './Header'

function Login({onLogin}) {
    const [uname,setUname]=useState('')
    const [pwd,setPwd]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        onLogin({uname,pwd})
        setUname('')
        setPwd('')
    }
    return (
        <div>
            <Header title="Login Form" />
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>User Name</label>
                    <input type='text' placeholder='User Name'
                    value={uname} onChange={(e)=>setUname(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Password' value={pwd} onChange={(e)=>setPwd(e.target.value)}></input>
                </div>
                <input type='submit' value='Login' className='btn btn-block' ></input>
            </form>
        </div>
    )
}

export default Login
