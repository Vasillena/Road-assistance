import classes from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="home" className={classes["hero-container"]}>
      <div className={classes["hero-text"]}>
        <h1>
          <span className={classes.span}>Денонощна</span> <br />
          пътна помощ
        </h1>
        <br />
        <br />
        <h3>ПЛОВДИВ, АМ ТРАКИЯ И ЦЯЛАТА СТРАНА</h3>
      </div>
      <div className={classes["middle-line-container"]}>
      <div className={`${classes.line} ${classes["fast-arrival"]}`}>
        <p>БЪРЗО И НАДЕЖДНО</p>
      </div>
      <div className={`${classes.line} ${classes["phone-number"]}`}>
        <Link
          href="tel:+359884735665"
          className={classes["phone-link"]}
          rel="nofollow noopener"
          aria-label="Phone"
        >
          <p>+359 884735665</p>
        </Link>
      </div>
      <div className={`${classes.line} ${classes["non-stop"]}`}>
        <p>НА РАЗПОЛОЖЕНИЕ 24/7</p>
      </div>
    </div>
    </div>
  );
}
