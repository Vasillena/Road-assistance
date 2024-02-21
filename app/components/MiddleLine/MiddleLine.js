import Link from "next/link";
import classes from "./MiddleLine.module.css";

export default function MiddleLine() {
  return (
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
  );
}
