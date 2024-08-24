import {createContext,useState}from 'react'
// import PropTypes from 'prop-types';
export const ThemeCon= createContext({
  theme:'light',
  setTheme:()=>{},
  themeSwitch:()=>{},
})
// eslint-disable-next-line react/prop-types
export default function Theme({children}) {
  
    const [theme,setTheme] = useState('light')
   
   const themeSwitch=()=>{
    if(theme=== 'light'){
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
      setTheme('dark');
    }else{
      setTheme(document.documentElement.classList.add("light"))
      document.documentElement.classList.remove("dark")
      setTheme('light');
    }   
   }

  return (
      <ThemeCon.Provider value={{theme,themeSwitch, setTheme}}>
{children}
      </ThemeCon.Provider>
  )
}


