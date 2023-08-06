"use client"
import React, { useState } from "react";
import Padding from "../layout/padding";
import Link from "next/link";
import styles from "./navigation.module.css";
import SocialLinks from "../elements/social-link/social-link";
import MenuNav from "./menuNav.jsx";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Padding>
      <div className={styles.container}>
        <div>
          <SocialLinks platform="main" href="/" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/manifesto">Manifesto</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.header}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      {isActive && <MenuNav />}
    </Padding>
  );
};

export default Navigation;
