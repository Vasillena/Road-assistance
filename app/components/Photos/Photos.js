import classes from "./Photos.module.css";
import PhotosDesktop from "./PhotosDesktop";
import PhotosMobile from "./PhotosMobile";

export default function Photos() {
  return (
    <>
      <div className={classes["photos-container"]} data-aos="fade-up">
        <PhotosDesktop />
      </div>
      <div className={classes["slideshow-container"]} data-aos="fade-up">
        <PhotosMobile />
      </div>
    </>
  );
}
