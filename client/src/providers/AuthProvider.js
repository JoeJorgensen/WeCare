import React, {useState} from 'react'
import react from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer


const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    // Register/Sign up 
    const handleRegister = async (user)=>{
        //needs a valid email and a password that is at least 6 characters 
        try {
            let res = await axios.post('/api/auth',user)
            setUser(res.data.data)
            navigate('/')

        }catch(err){
            // A lot of work in error handling should be done here
            alert('Error: Unable to register user, make sure password is at least 6 characters and email is valid.')

        }
    }

    //Login 
    const handleLogin = async (user)=>{
        //need correct email and password for this to work
        try {
            let res = await axios.post('/api/auth/sign_in',user)
            setUser(res.data.data)
            navigate('/')

        }catch(err){
            // A lot of work in error handling should be done here
            alert('Error: Unable to login user make sure email and password are correct.')

        }
    }

    return (
        <AuthContext.Provider value={{user, handleRegister, handleLogin}}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider