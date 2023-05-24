import "./styles/components/navigation.scss"
import "./styles/components/footer.scss"


import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";

import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import CinemaCard from "./utils/CinemaCards";
import Navigation from "./components/Navigation";



function App() {
  return (
    <div >
      <Navigation/>
      <Buttons/>
      <Sidebar/>
      
      <Table/> 
      <CinemaCard/>
      
      <Footer/>
    </div>
  );
}

export default App;
