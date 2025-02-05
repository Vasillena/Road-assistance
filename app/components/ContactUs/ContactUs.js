import classes from "./ContactUs.module.css";
import Link from "next/link";
import Image from "next/image";
import socials1 from "../../../public/socials-1.png";
import socials2 from "../../../public/socials-2.png";
import socials3 from "../../../public/socials-3.png";

export default function ContactUs() {
  return (
    <div
      id="contact"
      className={classes["contact-container"]}
      data-aos="fade-up"
    >
      <div className={classes["text"]}>
        <p>За въпроси или запитвания, моля, свържете се с нас!</p>
      </div>
      <div className={classes["socials"]}>
        <Link
          href="tel:+359884735665"
          className={classes["phone-link"]}
          rel="nofollow noopener"
          aria-label="Phone"
        >
          <Image src={socials1} width={50} height={50} alt="Socials" />
        </Link>
        <Link
  href="viber://chat?number=%2B359884735665"
          className={classes["viber-link"]}
          rel="nofollow noopener"
          aria-label="Viber"
        >
          <Image src={socials2} width={55} height={55} alt="Socials" />
        </Link>
        <Link
          href="https://wa.me/359884735665?text="
          className={classes["whatsapp-link"]}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Whatsapp"
          data-hover="WhatsApp"
        >
          <Image src={socials3} width={50} height={50} alt="Socials" />
        </Link>
      </div>
    </div>
  );
}
