"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SVGFrame1 = () => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="yellow" />
  </svg>
);

const SVGFrame2 = () => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="yellow" />
    <circle cx="150" cy="100" r="80" fill="black" />
  </svg>
);

const SVGFrame3 = () => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="150" cy="100" r="80" fill="black" />
    <circle cx="200" cy="100" r="80" fill="yellow" />
  </svg>
);

const SVGFrame4 = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    style={{ background: "black" }}
  >
    <path
      d="M100 50 C 130 50, 130 150, 100 150 C 70 150, 70 50, 100 50 Z"
      fill="yellow"
    />
    <circle cx="40" cy="40" r="5" fill="white" />
    <circle cx="60" cy="60" r="3" fill="white" />
    <circle cx="80" cy="80" r="4" fill="white" />
  </svg>
);

const SVGFrame5 = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    style={{ background: "black" }}
  >
    <path
      d="M100 50 C 130 50, 130 150, 100 150 C 70 150, 70 50, 100 50 Z"
      fill="yellow"
    />
    <circle cx="40" cy="40" r="5" fill="white" />
    <circle cx="60" cy="60" r="3" fill="white" />
    <circle cx="80" cy="80" r="4" fill="white" />
    <circle cx="120" cy="40" r="2" fill="white" />
    <circle cx="140" cy="60" r="3" fill="white" />
  </svg>
);
const frames = [
  <SVGFrame1 key="1" />,
  <SVGFrame2 key="1" />,
  <SVGFrame3 key="1" />,
  <SVGFrame4 key="1" />,
  <SVGFrame5 key="1" />,
];
const reverseFrames = [...frames].reverse();

const AnimatedSVG = () => {
  const { theme, resolvedTheme } = useTheme();
  const [frame, setFrame] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationFrames, setAnimationFrames] = useState(frames);

  useEffect(() => {
    if (animating) {
      let timeoutId: string | number | NodeJS.Timeout | undefined;
      if (frame < animationFrames.length - 1) {
        timeoutId = setTimeout(() => setFrame(frame + 1), 100);
      } else {
        setAnimating(false);
      }

      return () => clearTimeout(timeoutId);
    }
  }, [frame, animating, animationFrames]);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setAnimationFrames(frames);
      setFrame(0);
      setAnimating(true);
    } else if (resolvedTheme === "light") {
      setAnimationFrames(reverseFrames);
      setFrame(0);
      setAnimating(true);
    }
  }, [resolvedTheme]);

  return <div>{animationFrames[frame]}</div>;
};

export default AnimatedSVG;
