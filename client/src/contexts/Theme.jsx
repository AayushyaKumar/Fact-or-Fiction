import {createContext,useEffect,useState}from 'react'
// import PropTypes from 'prop-types';
export const ThemeCon= createContext({
  theme:'light',
  setTheme:()=>{},
  themeSwitch:()=>{},
})
// eslint-disable-next-line react/prop-types
export default function Theme({children}) {
  
    const [theme,setTheme] = useState('dark')
    // const themeSwitch=()=>{
   useEffect(() => {
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if(systemMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      setTheme('light');
    }
   },[])
   
   const themeSwitch=()=>{
    if(theme=== 'light'){
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      setTheme('dark');
    }else{      
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      setTheme('light');
    }   
   }

  return (
      <ThemeCon.Provider value={{theme,themeSwitch, setTheme}}>
{children}
      </ThemeCon.Provider>
  )
}


