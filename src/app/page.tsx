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
    <div>
      <h1>Advice</h1>
      {advice && (
        <div>
          <p>ID: {advice.slip.id}</p>
          <p>Advice: {advice.slip.advice}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
