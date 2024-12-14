import { createContext } from "react"


interface IAppContext {
    user: string
}

export const AppContext = createContext({} as IAppContext)
export const AppContextProvider = ({ children }: any) => {
    const user = 'Alex'
    return (
        <AppContext.Provider value={{ user }}>
            {children}
        </AppContext.Provider>
    )
}