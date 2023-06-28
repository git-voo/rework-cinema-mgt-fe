import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/buttons/buttons.css";
import "../src/styles/components/navigation.scss";
import "../src/styles/table/table.css";
import "../src/styles/movieDetails/movieDetails.css"
import "../src/styles/global.scss"



import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar"; 
import HomePage from "./pages/HomePage";
import PageNav from "./components/PageNav";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Cards from "./components/Cards";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Vendor";
import Index from "./pages/admins/Index"; 
import MainNavBar from "./components/MainNavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import VariablesContext from "./contexts/VariablesContext";
import AxiosConfiguration from "./services/AxiosConfiguration";
import Interceptors from "./services/Interceptors";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <VariablesContext>
      <Interceptors/>
        {/* <Interceptors>
          <Login/>
    </Interceptors> */}
    <BrowserRouter >
  
      {/* <HomePage/> */}
       {/* <Buttons/>
      <Sidebar/>
      <Footer/>
      <PageNav/>
      <Table/> 
      <MovieDetailsPage/>
      <Cards/> */}
        {/* <MainNavBar/> */}




      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/register" element={<Signup/>} />
        
        <Route path="/auth/login" element={<Login/>} />

        <Route path="/auth/password-reset" element={<PasswordReset/>} />

        <Route path="/user/dashboard" element={<UserDashboard/>} /> 
        <Route path="/movie/:id" element={<MovieDetailsPage/>} />
        <Route path="/admin" element={<Index/>} /> 
      </Routes>
    
    
    </BrowserRouter>
    </VariablesContext>
  );
};

export default App;
