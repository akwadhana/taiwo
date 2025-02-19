import { useState } from "react";
import { BeachSide, Car, Facebook, Head, House, Instagram, Twitter, YouTube } from "../../assets";

const Page = () => {
  const allCardData = [
    {
      imageSrc1: House,
      button1: "Technology",
      imageSrc2: Head,
      title: "Proactive Approach",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "Jan 30, 2025",
    },
    {
      imageSrc1: BeachSide,
      button1: "Innovation",
      imageSrc2: Head,
      title: "Creative Solutions",
      description: "How Innovation is Reshaping the Future of Work.",
      date: "Feb 1, 2025",
    },
    {
      imageSrc1: Car,
      button1: "Technology",
      imageSrc2: Head,
      title: "Smart Mobility",
      description: "The Future of Transportation: Self-Driving Cars and Beyond.",
      date: "Feb 3, 2025",
    },
    {
      imageSrc1: Car,
      button1: "Future Tech",
      imageSrc2: Head,
      title: "Next-Gen Vehicles",
      description: "Electric Cars: The Road to a Sustainable Future.",
      date: "Feb 5, 2025",
    },
    {
      imageSrc1: BeachSide,
      button1: "Lifestyle",
      imageSrc2: Head,
      title: "Work-Life Balance",
      description: "The Role of Remote Work in a Digital Economy.",
      date: "Feb 7, 2025",
    },
    {
      imageSrc1: House,
      button1: "Architecture",
      imageSrc2: Head,
      title: "Modern Living",
      description: "Smart Homes and How They're Changing Our Lives.",
      date: "Feb 10, 2025",
    },
  ];

 
  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [displayedCards, setDisplayedCards] = useState(() => shuffleArray(allCardData).slice(0, 3));

  const loadMoreCards = () => {
    const displayedSet = new Set(displayedCards);
    const remainingCards = allCardData.filter((card) => !displayedSet.has(card));

    if (remainingCards.length === 0) {
      setDisplayedCards(shuffleArray(allCardData).slice(0, 3));
    } else {
      const newCards = shuffleArray(remainingCards).slice(0, 3);
      setDisplayedCards((prev) => [...prev, ...newCards]);
    }
  };

  return (
    <>
      <div className="border border-[#F6F6F7] h-[430px] mt-5 bg-[#F6F6F7] rounded-2xl lg:w-[1216px] lg:ml-46 lg:h-[344px]">
        <div className="flex m-10 justify-center">
          <img src={Head} alt="Profile" className="w-6 h-6 mr-2 rounded-full" />
          <div className="flex flex-col">
            <p className="text-[20px]">Jonathan Doe</p>
            <span className="text-[14px]">Collaborator & Editor</span>
          </div>
        </div>
        <div className="text-center lg:px-80 px-5">
          <p className="text-[18px] text-[#3B3C4A]">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
        </div>
        <div className="flex mt-5 lg:mt-10 justify-center space-x-2">
          {[Facebook, Twitter, Instagram, YouTube].map((icon, index) => (
            <img key={index} src={icon} alt="Social Icon" className="w-8 h-8 p-2 bg-[#696A75] rounded" />
          ))}
        </div>
      </div>

      <div className="mt-20 text-center lg:text-start lg:ml-50 text-[#181A2A] text-[24px] font-semibold">
        <p>Latest Post</p>
      </div>

      <div className="flex flex-col items-center justify-center p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayedCards.map((card, index) => (
            <div
              key={index}
              className="border border-[#E8E8EA] bg-[#FFFFFF] rounded-xl p-6 flex flex-col lg:w-[390px] lg:h-[480px]"
            >
              <div className="flex justify-center items-center">
                <div className="w-[360px] h-[240px] rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src={card.imageSrc1} alt={card.title} />
                </div>
              </div>
              <button className="mt-4 bg-[#4B6BFB0D] text-center text-[#4B6BFB] py-2 px-6 lg:w-35 rounded-lg">
                {card.button1}
              </button>
              <p className="text-[#181A2A] text-[20px] px-3 mt-4">{card.description}</p>
              <div className="flex items-center mt-4">
                <div className="flex items-center space-x-3">
                  <img className="w-[36px] h-[36px] rounded-full" src={card.imageSrc2} alt={card.title} />
                  <h1 className="text-[16px] text-[#B2BBD1] font-semibold">{card.title}</h1>
                </div>
                <span className="text-[14px] ml-7 text-[#7A849C]">{card.date}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={loadMoreCards} className="mt-6 bg-[#4B6BFB] text-white py-2 px-6 rounded-lg">
          Load More
        </button>
      </div>
    </>
  );
};

export default Page;
