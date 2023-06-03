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
import Cards from "./components/Cards";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Vendor";
import Index from "./pages/admins/Index"; 
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <BrowserRouter >
<MainNavBar/>
      {/* <HomePage/> */}
       {/* <Buttons/>
      <Sidebar/>
      <Footer/>
      <PageNav/>
      <Table/> 
      <MovieDetailsPage/>
      <Cards/> */}


      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movie/:id" element={<MovieDetailsPage/>} />
        <Route path="/admin" element={<Index/>} />
      </Routes>

    
    </BrowserRouter>
  );
};

export default App;
