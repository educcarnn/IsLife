import { createContext, useState } from "react";

export const PatientMessageContext = createContext()

export const PatientMessageProvider = ({children}) =>{

    const [message, setMessage] = useState('')


    const sendMessage = () =>{

        setMessage(message)

    }


    const clearMessage = () =>{

        sendMessage('')

    }


    return (
        <PatientMessageContext.Provider value={{message, sendMessage, clearMessage}}>
            {children}
        </PatientMessageContext.Provider>
    )


}