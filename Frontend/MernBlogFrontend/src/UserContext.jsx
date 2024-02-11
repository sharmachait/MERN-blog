import { createContext, useState } from "react"

export const UserContext = createContext({});
///The createContext() method in React is used to create a context object. When React renders a component that subscribes to this context object, it will read the current context value from the closest matching Provider above it in the tree.

export function UserContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState('');
    return (<UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
    </UserContext.Provider>);
}