
import { useState } from "react"


type AuthUser = {
    name:string
    email:string
}
export const User = (parmas:AuthUser) =>
{
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name:parmas.name,
            email:parmas.email
        })
    }
    const handleLogout = () => { setUser(null)}
    return (
        <div>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogin}>Login</button>
            <button style={{padding:'4rem', margin:'1rem'}} onClick={handleLogout}>logout</button>
            <div> {user?.name} </div>
            <div> {user?.email} </div>
        </div>
    )
}