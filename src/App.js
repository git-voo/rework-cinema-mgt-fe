import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";

import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import CinemaCard from "./utils/CinemaCards";



function App() {
  return (
    <div >
      <Buttons/>
      <Sidebar/>
      <Footer/>
      
      <Table/> 
      <CinemaCard/>
    </div>
  );
}

export default App;
