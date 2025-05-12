import React from "react";

const BlackHole = () => {
  return (
    <div className="relative h-[620px] overflow-hidden w-full">
      <video autoPlay muted loop className="h-[850px] w-full object-cover">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BlackHole;
