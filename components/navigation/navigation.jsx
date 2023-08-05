"use client";
import React, { useState } from "react";
import Padding from "../layout/padding";
import Link from "next/link";
import styles from "./navigation.module.css";
import SocialLinks from "../elements/social-link/social-link";
import ExternalLink from "../elements/external-link/external-link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
      {isActive && (
        <div className={styles.menuContainer}>
          <div className={styles.menuBody}>
            <div className={styles.menuNav}>
              <div className={styles.menuHeader}>
                <p>Navigation</p>
                {navItems.map((data, index) => {
                  return (
                    <ExternalLink
                      key={index}
                      data={{ ...data, index }}
                      isActive={selectedIndicator == data.href}
                      setSelectedIndicator={setSelectedIndicator}
                    ></ExternalLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Padding>
  );
};

export default Navigation;
