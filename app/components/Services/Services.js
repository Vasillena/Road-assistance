import classes from "./Services.module.css";
import Image from "next/image";
import icon1 from "@/public/icon-1.svg";
import icon2 from "@/public/icon-2.svg";
import icon3 from "@/public/icon-3.svg";
import icon4 from "@/public/icon-4.svg";
import icon5 from "@/public/icon-5.svg";
import icon6 from "@/public/icon-6.svg";

export default function Services() {
  return (
    <div id="services" className={classes["services-container"]}>
      <h2>НАШИТЕ УСЛУГИ</h2>
      <div className={classes["container"]}>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon1} width={100} height={100} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Денонощна пътна помощ. Превоз на автомобили до КАТ</p>
          </div>
        </div>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon2} width={50} height={50} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Подаване на ток</p>
          </div>
        </div>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon3} width={50} height={50} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Доставка на гориво</p>
          </div>
        </div>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon4} width={100} height={100} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Превоз на всякаква техника и машини до 4 тона</p>
          </div>
        </div>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon5} width={100} height={100} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Превоз на материали и товари от всякакъв вид</p>
          </div>
        </div>
        <div className={classes.service} data-aos="fade-up">
          <div className={classes.icon}>
            <Image src={icon6} width={100} height={100} alt="Icon" />
          </div>
          <div className={classes.text}>
            <p>Превоз и изкупуване на автомобили за скрап</p>
          </div>
        </div>
      </div>
    </div>
  );
}
