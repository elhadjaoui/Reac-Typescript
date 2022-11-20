import { useContext } from "react"
import { AuthUser, UserContext } from "./UserContext"

export const User = (props:AuthUser) =>
{
    
    const user = useContext(UserContext)
    const handleLogin = () => {user.setUser(props)}
    const handleLogout = () => {user.setUser(null)}
    return (
        <div>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogin}>Login</button>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogout}>logout</button>
            <div> User Name is  {user.user?.name}</div>
        </div>
    )
}