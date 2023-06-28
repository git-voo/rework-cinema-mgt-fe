import { useEffect, useState } from "react"
import { nameCase } from "../utils/NameCase"

export default function UserDashboard(){
    const[user, setUser] = useState("")
    useEffect(()=>{
        const localUser = localStorage.getItem("primeUser")
        setUser(JSON.parse(localUser))
 
    }, [])

   
    return (
        <div className="dashboard-container">
            <h1>Welcome {nameCase(user?.fullName)}
            
            </h1>
        </div>
    )
}