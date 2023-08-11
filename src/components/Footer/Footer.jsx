import React from "react";
import styles from "./footer.module.css";
// import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerList}>
        <ul className={styles.footerUl}>
          <li>MANIFESTO</li>
          <li>ABOUT</li>
          <li>OUR SERVİCE</li>
          <li>PRIVACY POLİCY</li>
          <li>AFFILIATE PROGRAM</li>
        </ul>
      </div>
      <h2 className={styles.footerMainText}>F1 GALLERY & BLOG</h2>
    </footer>
  );
};

export default Footer;
