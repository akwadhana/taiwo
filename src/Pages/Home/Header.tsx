import { Link } from "react-router-dom";
import { Head } from "../../assets";

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
    <div
      className="relative lg:mx-44 rounded-2xl h-96 md:h-[600px] mt-10 mx  bg-cover bg-center mb-4"
      style={{ backgroundImage: `url(${Head})` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-black opacity-15"></div>

      <div className="absolute lg:mx-12 px-8 mt-40 lg:mt-30 lg:bg-white lg:top-[20%] lg:h-[304px] rounded-2xl lg:shadow lg:w-[598px]  z-10">
        <Link to="/SinglePost">
        <button className="ml-3 bg-[#4B6BFB] hover:bg-[#3a55d1] mt-8 px-5  lg:px-4 text-white lg:w-[120px] py-2 rounded-lg transition duration-300">
  Technology
</button>
        </Link>
        <p className=" text-white lg:text-black text-sm lg:text-[36px] font-semibold lg:leading-12 m-3">
          The Impact of Technology on the Workplace: 
          How Technology is Changing
        </p>

        <div className="flex ml-3  m-1">
          <img
            src={Head}
            alt="Small Icon"
            className="w-6 z-20  h-6 mr-2 rounded-full"
          />
          <div className="text-sm z-10 lg:text-[#97989F] text-[#FFFFFF]">
            Tracey Wilson <span className="ml-6">August 20, 2022</span>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Hero;
