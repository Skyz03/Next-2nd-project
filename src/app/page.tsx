"use client";

import { useEffect, useState } from "react";

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
    <div className="bg-darkblue text-center h-[100vh] w-full">
      {advice && (
        <div className="flex h-full justify-center items-center">
          <div className="container w-auto flex flex-col items-center justify-center bg-grayishblue p-4 rounded-lg ">
            <p className="text-neongreen">ADIVCE # {advice.slip.id}</p>
            <p>&quot;{advice.slip.advice}&quot;</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
