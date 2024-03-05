import classes from "./Photos.module.css";
import Image from "next/image";
import { images } from "./Images";

export default function PhotosDesktop() {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className={classes.slide}>
          {images.map((photo, photoIndex) => (
            <div key={photoIndex} className={classes.photo}>
              <Image src={photo.image} alt={photo.alt} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
