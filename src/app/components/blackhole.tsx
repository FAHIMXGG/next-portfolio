"use client";
import { useTheme } from "next-themes";
import React from "react";

const BlackHole = () => {
  const { theme } = useTheme()
  if (theme !== "dark") return <div className="mt-[300px]"></div>;
  return (
    <div className="relative h-[620px] 2k:h-[950px] overflow-hidden w-full">
      <video autoPlay muted loop className="h-[850px] 2k:h-[1500px] w-full object-cover">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BlackHole;
