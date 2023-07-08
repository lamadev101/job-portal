import { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "./localStorage";
// import { authReducer } from "./authReducer";

const Context = createContext()

const ContextApi = ({children}) => {
  const [loggedUser, setLoggedUser] = useState(false)
  const {access_token} = getToken()

  // const [state, dispatch] = useReducer(authReducer, false)

  // useEffect(()=>{
  //   setLoggedUser(access_token !== null ? true : false)
  // }, [])

  return (
    <Context.Provider value={{access_token, loggedUser, setLoggedUser}}>
      {children}
    </Context.Provider>
  )
}

export default ContextApi
export const useStateContext = ()=> useContext(Context)