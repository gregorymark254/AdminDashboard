import React,{ createContext,useReducer,useContext, useState } from 'react'

const Auth = createContext()

const Context = ({children}) => {

  const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  }

  const cartReducer = (state,action) => {
    switch (action.type) {
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
      default:
        return state;
    }
  }

  const [state,dispatch] = useReducer(cartReducer, initialState)
  const [auth, setAuth] = useState({});


  return (
    <>
      <Auth.Provider value={{state,dispatch,auth,setAuth}}>
        {children}
      </Auth.Provider> 
    </>
  )
}

export default Context

export const LoginState = () => {
    return useContext(Auth)
  } 