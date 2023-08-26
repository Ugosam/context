
import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const [lightTheme, darkTheme] =useState(false);

   const themeVal ={
        lightTheme,
        darkTheme
    }

  return (
   <ThemeContext.Provider value={themeVal}>
     {children}
   </ThemeContext.Provider>
  )
}
