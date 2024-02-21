import Link from "next/link";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-text"]}>
        <p className="copyright">
          Copyright © 2024. Всички права запазени | Създадено от
          <Link
            href="https://github.com/Vasillena"
            target="_blank"
            className={classes["github-link"]}
          >
            {" "}
            VY
          </Link>
        </p>
      </div>
    </footer>
  );
}
