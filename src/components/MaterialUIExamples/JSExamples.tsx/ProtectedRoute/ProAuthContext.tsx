import React, { useContext, useState } from 'react'

export const ProAuthContext = React.createContext<any>(null)

export const ProAutoProvider = ({children}:any) => {
    const [user, setUser] = useState<string | null>(null)

    const login = (value:string) => {
        setUser(value)
    }

    const logout = () => {
        setUser(null)
    }

    return <ProAuthContext.Provider value={{user, login, logout}}>
        {children}
    </ProAuthContext.Provider>
}

export const useAuthConsumer = () => {
    return useContext(ProAuthContext)
}