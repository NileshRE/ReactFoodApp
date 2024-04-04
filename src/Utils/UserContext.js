import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider=({children})=>{
    const [name, setName] = useState("Nilesh");

    return(
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}

export const useName=()=>{
    return useContext(UserContext);
}

const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState("light");
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>{
    return useContext(ThemeContext);
}