import Dashboard from "../../components/admin/Dashboard";
import NavigationBar from "../../components/admin/NavigationBar";
import Sidebar from "../../components/admin/Sidebar";

export default function Index(){
    return(
        <div className="container-body">
            <Sidebar/>
            <NavigationBar/>
            <Dashboard/>
        </div>
    )
}