import { createContext,useContext } from "react";

// can give value while creating context also
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// we can jsut import useTheme and use context from here 
export default function useTheme(){
    return useContext(ThemeContext)
}