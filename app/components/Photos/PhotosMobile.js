"use client";

import classes from "./Photos.module.css";
import Image from "next/image";
import { images } from "./Images";
import { useEffect, useState } from "react";

export default function PhotosMobile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          fill={true}
          alt={image.alt}
        />
      ))}
    </>
  );
}
