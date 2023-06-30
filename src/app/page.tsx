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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data: AdviceSlip = await response.json();
        setAdvice(data);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-darkblue font-manrope text-center h-[100vh] w-full">
      {advice && (
        <div className="flex h-full justify-center items-center">
          <div className="container w-auto flex flex-col items-center justify-center bg-grayishblue p-4 rounded-lg ">
            <p className="text-neongreen text-[9px] tracking-[0.15rem]">
              ADIVCE # {advice.slip.id}
            </p>
            <p className="text-white text-xl mt-4 text font-semibold tracking-wide">
              &quot;{advice.slip.advice}&quot;
            </p>
            <Image
              className="mt-6"
              src="/pattern-divider-desktop.svg"
              alt="me"
              width="100"
              height="64"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
