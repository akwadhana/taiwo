import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import Home from "../../Pages";

const HomeLayout = () => {
  return (
    <div className=" ">
    
      <div className="flex flex-col justify-between px-4 md:px-0 bg-[#FFFFFF] ">

      <NavBar/>
    <Home/>
        <Outlet />
        <Footer/>
        <div className="">
      
        </div>
       
      </div>
    </div>
  );
};

export default HomeLayout;
