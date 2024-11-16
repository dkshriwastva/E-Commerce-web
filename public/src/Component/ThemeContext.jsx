import React , {createContext  , useState} from 'react';
 export const ThemeStore = createContext(null);
    

const ThemeContext = ({children}) => {
    const [theme , setTheme] = useState("Light");
  return (
    <>
    <ThemeStore.Provider value ={{theme , setTheme }}>
      {children}
    </ThemeStore.Provider>
    </>
  )
}

export default ThemeContext;
