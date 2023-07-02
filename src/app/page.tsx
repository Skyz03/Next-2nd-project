"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

function Home() {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-darkgrayishblue");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: AdviceSlip = await response.json();
      setAdvice(data);
      setBackgroundColor(getRandomBackgroundColor());
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const getRandomBackgroundColor = () => {
    const colors = [
      "bg-[#0E2954]",
      "bg-[#1F6E8C]",
      "bg-[#2E8A99]",
      "bg-[#E1AEFF]",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <>
      <div className="bg-darkblue font-manrope text-center h-[100vh] w-full">
        {advice && (
          // This is the body elements start
          <div className="flex h-full justify-center items-center flex-col">
            {/* This is the card start  */}
            <div
              className={`container  w-auto flex flex-col items-center justify-center ${backgroundColor} p-8 rounded-lg `}
            >
              <p className="text-neongreen text-[9px] tracking-[0.15rem]">
                ADIVCE # {advice.slip.id}
              </p>
              <p className="text-lightcyan text-xl mt-4 text font-semibold tracking-wide">
                &quot;{advice.slip.advice}&quot;
              </p>
              <Image
                className="mt-6"
                src="https://res.cloudinary.com/dflzmbghp/image/upload/v1688275594/pattern-divider-desktop_pcgfmj.svg"
                alt="me"
                width="100"
                height="64"
                style={{ width: "100%", maxWidth: "700px" }}
              />
            </div>
            {/* This is the card end  */}
            <div
              onClick={handleButtonClick}
              className="hover:cursor-pointer hover:animate-spin  bg-neongreen rounded-full flex justify-center items-center p-6 -mt-4"
            >
              <Image
                className="invert"
                src="https://res.cloudinary.com/dflzmbghp/image/upload/v1688275594/icon-dice_nbeprq.svg"
                alt="me"
                width="30"
                height="15"
              />
            </div>
          </div>
          // This is the body elements end
        )}
      </div>
    </>
  );
}

export default Home;
