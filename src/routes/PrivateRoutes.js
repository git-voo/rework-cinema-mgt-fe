import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoutes(){
    const isLoggedIn = localStorage.getItem("xyz")

    return isLoggedIn?<Outlet/>:Navigate({to:"/login", replace:true})
}