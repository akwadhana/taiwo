import { Link } from "react-router-dom";
import { Head } from "../assets";
// import { Head } from "../../assets";

interface Hero {
  mainImage: string;
  buttonText: string;
  textBelowButton: string;
  smallImage: string;
  additionalText: string;
  additionalData: string;
}

const Hero: React.FC = () => {
  return (
    <>
    <div className="text-center mt-15">
      <h1 className="font-bold text-3xl text-[#181A2A]">Page TItle</h1>
      
    </div>
    <div className="flex gap-3 text-center justify-center mt-2 items-center">
  <p>home</p>
  <div className="w-[1px] h-4 bg-[#E8E8EA]"></div> 
  <p>link one</p>
</div>
    <div

      className="relative lg:mx-44 mt-5 rounded-2xl h-[40vh] md:h-[600px] mx-full  bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${Head})` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-black opacity-15"></div>

      <div className="lg:mx-12 lg:px-8 lg:mt-[25%] lg:h-[304px] rounded-2xl  mt-40  ml-5  z-10">
        <Link to="/SinglePost">
          <button className=" ml-3 bg-[#4B6BFB]  mt-8  text-[#FFFFFF]  py-2 px-5 rounded-lg">
            Technology
          </button>
        </Link>
        <p className=" text-[#FFFFFF] text-sm lg:text-[36px] font-semibold lg:leading-12 m-3">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>

        <div className="flex ml-3 m-1">
          <img
            src={Head}
            alt="Small Icon"
            className="w-6 z-20 lg:w-[36px] lg:h-[36px]  h-6 mr-2 rounded-full"
          />
          <div className="text-sm mt-2 z-10 text-[#FFFFFF]">
            Tracey Wilson <span className="ml-5">August 20, 2022</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
