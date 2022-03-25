import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = ()=>{
    
    let auth = useContext(AuthContext)
    if(!auth.user){
        return <p>
            TODO: SHOULD NOT BE HERE WITHOUT BEING REGISTERED 
        </p>
    }
    return (

        <div>
            <h1>Home</h1>
            <p>Welcome {auth.user.email}</p>
            <p>{JSON.stringify(auth)}</p>
        </div>
    )
} 
export default Home