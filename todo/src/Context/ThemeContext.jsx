import { useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const toggleThemeFunction = () => {
        document.documentElement.classList.toggle('dark');
    }   

    return (
        <ThemeContext.Provider value={{toggleThemeFunction}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
