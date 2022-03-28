import { useContext, useState } from "react"
import Badge from "react-bootstrap/esm/Badge"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Card from "../Card"

const Login = ()=>{
    const [email, setEmail] = useState('testx@test.com')
    const [password, setPassword] = useState('123456')
    
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const auth = useContext(AuthContext)


    const handleSubmit = (e)=>{
        e.preventDefault()
        auth.handleLogin({email, password})
    }

    return (


        <div>
            <Card>
            <h1>Login</h1>
            <form>

                <Badge>
                <h5>Email</h5>
                </Badge>
                <br/>
                <br/>

                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br/>
                <br/>
                <Badge>
                <h5>Password</h5>
                </Badge>
                <br/>
                <br/>

                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br/>
                <br/>

                <Button onClick={handleSubmit}>Login</Button>
            </form>
            </Card>
        </div>
    )
} 
export default Login