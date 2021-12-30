import {FaTimes} from 'react-icons/fa'
const User=({key,user, onDelete})=> {
    return (
        <div className="task">
            <h3>{key}
                {user.name} <FaTimes
                 style={{color:'red',cursor:'pointer'}}
                 onClick={()=>onDelete(user._id)}/></h3>
            <p>{user.age}</p>
        </div>
    )
}

export default User
