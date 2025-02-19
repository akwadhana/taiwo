import React from "react";
import { Right } from "../assets";

const WeeklyNews: React.FC = () => {
  return (
    <div className="bg-[#F6F6F7]  border-b-2 border-[#E8E8EA]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-6 lg:w-full lg:mx-auto mt-10">
        <div className="flex lg:mx-auto flex-col lg:flex-row lg:w-1/3 w-full lg:space-x-30 text-center items-center lg:text-left lg:items-start">


          <div className="item-center justify-center flex flex-col">
            <h2 className="text-lg lg:mt-5 font-semibold text-gray-800">About</h2>
            <p className="text-smt text-[#3B3C4A] lg:w-50 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex mt-3 flex-col">
              <p>Email:  <span className="text-[#3B3C4A]">info@jstemplate.net</span></p> 
              <p>Phone: <span className="text-[#3B3C4A]">880 123 456 789</span></p>
            </div>
          </div>

          <div className="">
            <h2 className="text-[18px] mt-5 font-semibold  flex text-gray-800">
              Quick <span>Link</span>
            </h2>
            <ul className="text-sm text-[#3B3C4A] mt-5 space-y-3">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Archived</a></li>
              <li><a href="#" className="hover:underline">Author</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg mt-5 font-semibold text-gray-800">Category</h2>
            <ul className="text-sm text-[#3B3C4A] mt-5 space-y-3">
              <li><a href="#" className="hover:underline">Lifestyle</a></li>
              <li><a href="#" className="hover:underline">Technology</a></li>
              <li><a href="#" className="hover:underline">Business</a></li>
              <li><a href="#" className="hover:underline">Economy</a></li>
              <li><a href="#" className="hover:underline">Sports</a></li>
              <li><a href="#" className="hover:underline">Travel</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-white text-center justify-center lg:mr-40 p-6 rounded-lg shadow-md w-full lg:w-[392px] lg:h-[254px] mt-6">
          <h2 className="text-xl font-bold text-[#181A2A]">Weekly News</h2>
          <p className="text-sm text-[#696A75] mt-2">
            Get blog articles and offers via email.
          </p>

          <div className="mt-10 items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="lg:w-[320px] p-2 border w-full border-[#DCDDDF] rounded-lg"
            />
            <button className="bg-blue-500 w-full lg:w-[320px] mt-4 text-white px- py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <hr className="border-t border-[#DCDDDF] my-4  mx-auto w-[80%]" />

      <div className="flex mb-7 flex-col lg:flex-row justify-between mt-5">
        <img src={Right} alt="Right" className="mt-4 w-80 ml-6 lg:ml-60" />
        <div className="flex lg:flex-row space-x-4 ml-6 lg:space-x-8 lg:mr-52 mt-5">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyNews;
