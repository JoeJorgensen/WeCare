import React, {useState} from 'react'
import react from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer


const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const handleRegister = async (user)=>{
        try {
            let res = await axios.post('/api/auth',user)
            setUser(res.data.data)
            navigate('/')

        }catch(err){
            alert('Error registering user')

        }
    }

    return (
        <AuthContext.Provider value={{user, handleRegister}}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider