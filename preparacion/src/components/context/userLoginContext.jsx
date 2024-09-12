import React, {createContext, useState} from 'react'


export const UseLoginContext = createContext();

export const UserLoginContext = ({children}) => {

    const [userLogin, setUserlogin] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const onLoginAccess =(userData)=>{
        setUserlogin(userData)
        setIsLogin(true)
    }


    const onLogOut =()=>{
        setUserlogin(null)
        setIsLogin(false)
    }

  return (
    <UseLoginContext.Provider value={{onLoginAccess, userLogin, isLogin, onLogOut}}>
        {children}
    </UseLoginContext.Provider>
  )
}
