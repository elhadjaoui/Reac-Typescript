
import { useState } from "react"

export const LoggedIn = () =>
{
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin = () => {
        setisLoggedIn(true)
    }
    const handleLogout = () => { setisLoggedIn(false)}
    return (
        <div>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogin}>Login</button>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogout}>logout</button>
            <div>User is  {isLoggedIn ? "LoggedIn" : "LoggedOut"}</div>
        </div>
    )
}