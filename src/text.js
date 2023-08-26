import React, { useContext } from 'react'
import { ThemeContext } from './context/DataTheme';


export const Text = () => {
    const { lightTheme, darkTheme } = useContext(ThemeContext);

    console.log(lightTheme);

    const toggleTheme = () =>{
        darkTheme(!lightTheme)
    }

    return (
        <>
            <h1 className={lightTheme ? 'dark' : 'light'} >
                <span>
                    hello
                </span>
                <button onClick={toggleTheme}>
                 change theme
                </button>
            </h1>

        </>
    )
}

