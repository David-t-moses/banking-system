"use client";

import React from "react";
import Countup from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <Countup duration={2} decimal="," decimals={2} prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
