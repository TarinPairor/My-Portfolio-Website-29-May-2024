"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

interface DraggableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  shadow?: string;
}

const SpinningImage: React.FC<DraggableImageProps> = ({
  src,
  alt,
  width,
  height,
  shadow,
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame: number;

    const updateRotation = () => {
      setRotation((prevRotation) => prevRotation + 0.0);
      animationFrame = requestAnimationFrame(updateRotation);
    };

    animationFrame = requestAnimationFrame(updateRotation);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className={classNames("transform transition-transform duration-900")}
      style={{ transform: `rotateY(${rotation}deg)`, boxShadow: shadow }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default SpinningImage;
