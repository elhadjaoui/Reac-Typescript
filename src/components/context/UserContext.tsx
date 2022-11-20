import { Children, createContext, useState } from "react"

export type AuthUser = {
    name:string
    email:string
}

type UserContextProviderProp = {
    children : React.ReactNode 
}

type UserContextType = {
    user : AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// export const UserContext = createContext<UserContextType | null>(null) method 1
export const UserContext = createContext({} as UserContextType) 

export const UserContexProvider = ({children} : UserContextProviderProp) =>
{
    const [user, setUser] = useState<AuthUser | null>(null)
    return (<UserContext.Provider value={{user , setUser}}>{children}</UserContext.Provider>)
} 