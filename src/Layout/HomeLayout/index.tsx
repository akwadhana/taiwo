import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";


const HomeLayout = () => {
  return (
    <div className=" ">
    
      <div className="flex flex-col justify-between px-4 md:px-0 bg-[#FFFFFF] ">

      <NavBar/>
        <Outlet />
        <Footer/>
        <div className="">
      
        </div>
       
      </div>
    </div>
  );
};

export default HomeLayout;
