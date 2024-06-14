"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Lottie from "react-lottie";
import animationData from "../_components/json/globe.json";

const AnimatedLottie = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
  }, [resolvedTheme]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={!isPlaying}
      />
    </div>
  );
};

export default AnimatedLottie;
