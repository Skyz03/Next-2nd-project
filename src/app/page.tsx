"use client";

import { useEffect, useState } from "react";

function Home() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Advice</h1>
      <p>{advice}</p>
    </div>
  );
}

export default Home;
