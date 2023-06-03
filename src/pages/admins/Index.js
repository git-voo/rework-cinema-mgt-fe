 import NavigationBar from "../../components/admin/NavigationBar";
import Sidebar from "../../components/admin/Sidebar";
import Vendor from "../../components/admin/Vendor";

export default function Index(){
    return(
        <div className="container-body">
            <Sidebar/>
            <NavigationBar/>
            <Vendor/>
        </div>
    )
}