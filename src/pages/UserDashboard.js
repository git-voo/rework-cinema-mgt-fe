import { useEffect, useState } from "react"
import { nameCase } from "../utils/NameCase"
import MainNavBar from "../components/MainNavBar"

export default function UserDashboard(){
    const[user, setUser] = useState("")
    useEffect(()=>{
        const localUser = localStorage.getItem("primeUser")
        setUser(JSON.parse(localUser))
 
    }, [])

   
    return (
        <div className="dashboard-container">
            <MainNavBar/>
            <h1 className="top-4" style={{position:"relative", top:"100px"}}>Welcome {nameCase(user?.fullName)}
            
            </h1>
        </div>
    )
}