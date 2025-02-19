import React from "react";

const AdButton: React.FC = () => {
  return (
    <div className="flex justify-center my-6">
      <button className="w-[750px] h-[100px] bg-[#E8E8EA] text-black text-lg font-semibold rounded-lg shadow-md">
        <p className="text-[#696A75] text-[14px]">advertisement</p>
        <h1 className="text-[#696A75] text-[24px]">You Can Place Ads Here </h1>
        <p> (750x100)</p>
       
      </button>
    </div>
  );
};

export default AdButton;
