import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/buttons/buttons.css";
import "../src/styles/table/table.css";
import "../src/styles/movieDetails/movieDetails.css"



import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";
import CinemaCard from "./utils/CinemaCards";
import MovieDetails from "./pages/MovieDetails";
import PageNav from "./components/PageNav";



function App() {
  return (
    <div >
      <Buttons/>
      <Sidebar/>
      <Footer/>
      <PageNav/>
      <Table/> 
      <CinemaCard/>
      <MovieDetails/>
    </div>
  );
}

export default App;
