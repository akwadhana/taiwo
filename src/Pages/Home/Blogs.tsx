import { BeachSide, Car, Head, House } from "../../assets";
import { useState } from "react";
import AdButton from "../../Components/ButtonCard";
import Hero from "../../Components/Hero";
import { Link } from "react-router-dom";




const OurWork: React.FC = () => {
  const allCardData = [
    {
      imageSrc1: House,
      button1: "Technology",
      imageSrc2: Head,
      title: "Proactive Approach",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
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
      description:
        "The Future of Transportation: Self-Driving Cars and Beyond.",
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

  const [displayedCards, setDisplayedCards] = useState(() =>
    shuffleArray(allCardData).slice(0, 3)
  );

  function shuffleArray(array: any[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const loadMoreCards = () => {
    const remainingCards = allCardData.filter(
      (card) => !displayedCards.includes(card)
    );
    if (remainingCards.length === 0) {
      
      setDisplayedCards(shuffleArray(allCardData).slice(0, 3));
    } else {
  
      const newCards = shuffleArray(remainingCards).slice(0, 3);
      setDisplayedCards((prev) => [...prev, ...newCards]);
    }
  };

  return (
    <>
  <Hero/>
    <div className="flex flex-col items-center mt-5 justify-center p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {displayedCards.map((card, index) => (
          <div
            key={index}
            className="border border-[#E8E8EA] bg-[#FFFFFF] rounded-xl p-6 flex flex-col lg:w-[390px] h-[500px]"
          >
            <div className="flex justify-center items-center">
              <div className="w-[360px] h-[240px] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={card.imageSrc1}
                  alt={card.title}
                />
              </div>
            </div>
<Link to ='/SinglePost'>
<button className="mt-4 bg-[#4B6BFB0D] text-center  text-[#4B6BFB] py-2 px-6 lg:w-35 rounded-lg">
              {card.button1}
            </button>

</Link>
            
            <p className="text-[#181A2A] text-[20px] mt-4">{card.description}</p>

            <div className="flex items-center  mt-4">
              <div className="flex items-center space-x-3">
                <img
                  className="w-[36px] h-[36px] rounded-full"
                  src={card.imageSrc2}
                  alt={card.title}
                />
                
                <h1 className="text-[16px] text-[#B2BBD1] font-semibold">
                  {card.title}
                </h1>
              </div>
              <span className="text-[14px] ml-7 text-[#7A849C]">{card.date}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={loadMoreCards}
        className="mt-6 text-[16px] text-[#696A75] border border-[#696A754D] py-4 px-6 rounded-lg"
      >
        Load More
      </button>
    
      <div>
      <div className="w-[350px] lg:w-[750px] h-[100px]"> 
  <AdButton/>
  </div>


</div>
</div>
</>
  );
};

export default OurWork;
