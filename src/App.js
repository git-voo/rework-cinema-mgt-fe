import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/buttons/buttons.css";
import "../src/styles/table/table.css";
import "../src/styles/movieDetails/movieDetails.css"



import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import CinemaCard from "./utils/CinemaCards";
import HomePage from "./pages/HomePage";
import PageNav from "./components/PageNav";
import MovieDetailsPage from "./pages/MovieDetailsPage";



function App() {
  return (
    <div >

      <HomePage/>
      {/* <Buttons/>
      <Sidebar/>
      <Footer/>
      <PageNav/>
      <Table/> 
      <CinemaCard/> */}
      <MovieDetailsPage/>
    </div>
  );
}

export default App;
