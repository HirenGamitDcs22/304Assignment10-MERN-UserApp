import User from './User'
const Users=({users,onDelete})=> {
    return (
        <>
            {users.map((user) => (
                <h1>{user.id}</h1>
            ))}
        </>
    )
}

export default Users