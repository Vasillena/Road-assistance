import classes from "./Photos.module.css";
import Image from "next/image";
import photo1 from "../../../public/photo-1.jpg";
import photo2 from "../../../public/photo-2.jpg";
import photo3 from "../../../public/photo-3.jpg";
import photo4 from "../../../public/photo-4.jpg";
import photo5 from "../../../public/photo-5.jpg";
import photo6 from "../../../public/photo-6.jpg";

export default function Photos() {
  return (
    <div className={classes["photos-container"]} data-aos="fade-up">
      <div className={classes.slide}>
        <div className={classes.photo}>
          <Image src={photo1} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo2} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo3} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo4} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo5} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo6} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo3} alt="Truck" />
        </div>
      </div>
      <div className={classes.slide}>
        <div className={classes.photo}>
          <Image src={photo1} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo2} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo3} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo4} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo5} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo6} alt="Truck" />
        </div>
        <div className={classes.photo}>
          <Image src={photo3} alt="Truck" />
        </div>
      </div>
    </div>
  );
}
