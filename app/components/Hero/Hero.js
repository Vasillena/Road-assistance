import classes from "./Hero.module.css";

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
        <h3>ПЛОВДИВ, ХИСАРЯ, СТАРОСЕЛ И РЕГИОНЪТ</h3>
      </div>
    </div>
  );
}
