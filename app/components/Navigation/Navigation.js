"use client";

import { useState } from "react";
import Image from "next/image";

import classes from "./Navigation.module.css";
import menuBars from "@/public/menu-bars.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes["navbar-container"]}>
        <div className={classes["mobile-header"]}>
          <button className={classes["menu-button"]} onClick={toggleMenu}>
            <Image
              className={classes["menu-bars"]}
              src={menuBars}
              alt="Menu bars"
              priority
              width={24}
              height={24}
            />
          </button>
        </div>
        <nav
          className={`${classes.nav} ${isMenuOpen ? classes["menu-open"] : ""}`}
        >
          <ul className={classes["navbar-list"]}>
            <li className={classes["navbar-item"]}>
              <button
                className={classes["navbar-link"]}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li className={classes["navbar-item"]}>
              <button
                className={classes["navbar-link"]}
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>
            <li className={classes["navbar-item"]}>
              <button
                className={classes["navbar-link"]}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
