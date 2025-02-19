
import { Head,Paris } from "../../assets";



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
    <div className=" bg-white mt-10">
  
    
        <button className=" lg:ml-[21rem]  bg-blue-500 text-white w-[94px] py-2 rounded-lg">
          Technology 
        </button>

      
        <div className=" mt-5 text-center justify-start  text-[#181A2A]  ">
          <p className="   lg:text-4xl lg:ml-[21rem] font-semibold text-start">
            The Impact of Technology on the Workplace: 
          </p>
          <p className="lg:text-4xl mt-1 font-semibold text-start  lg:ml-[21.5rem] ">How Technology is Changing </p>
        </div>

      
        <div className=" m-5 lg:ml-[20.5rem] flex  text-[#696A75] px-4">
          <img
            src={Head} 
            alt="Small Icon"
            className="w-6 h-6 lg:w-[36px] lg:h-[36px]  mr-2 rounded-full"
          />
          <div className="text-sm">
            Tracey Wilson <span className="ml-5">August 20, 2022</span>
          </div>
        </div>
      </div>
    <div className="flex  lg:mr-24 items-center justify-center ">
    <img
            src={Paris} 
            alt="Small Icon"
            className="rounded"
          />
    </div>
   
    </>
  );
};

export default Hero;