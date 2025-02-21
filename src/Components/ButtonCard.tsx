import React from "react";

type AdButtonProps = {
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  dimensionsText?: string;
};

const AdButton: React.FC<AdButtonProps> = ({
  width = "750px",
  height = "100px",
  bgColor = "#E8E8EA",
  textColor = "#696A75",
  title = "You Can Place Ads Here",
  subtitle = "advertisement",
  dimensionsText = "(750x100)",
}) => {
  return (
    <div className="flex justify-center my-6">
      <button
        className="rounded-lg  hover:bg-[#3A5BDB] transition duration-300 shadow-md flex flex-col items-center justify-center"
        style={{ width, height, backgroundColor: bgColor, color: textColor }}
      >
        <p className="text-sm">{subtitle}</p>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-xs">{dimensionsText}</p>
      </button>
    </div>
  );
};

export default AdButton;
