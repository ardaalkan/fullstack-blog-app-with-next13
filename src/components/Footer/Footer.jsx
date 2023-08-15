"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import svgs from "../../utils/svgData";
import GsapMagnetic from "../GsapMagnetic/GsapMagnetic";
// import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerList}>
        <ul className={styles.footerUl}>
          <li>MANIFESTO</li>
          <li>ABOUT</li>
          <li>OUR SERVICE</li>
          <li>PRIVACY POLICY</li>
          <li>AFFILIATE PROGRAM</li>
        </ul>
      </div>
      <div className={styles.socialIcons}>
        <GsapMagnetic>
          <Image
            src={svgs.facebookSvg}
            alt="Facebook Logo"
            width={50}
            height={50}
          />
        </GsapMagnetic>
        <GsapMagnetic>
          <Image
            src={svgs.youtubeSvg}
            alt="YouTube Logo"
            width={50}
            height={50}
          />
        </GsapMagnetic>
        <GsapMagnetic>
          <Image
            src={svgs.twitterSvg}
            alt="Twitter Logo"
            width={50}
            height={50}
          />
        </GsapMagnetic>
      </div>
      <h2 className={styles.footerMainText}>F1 GALLERY & BLOG</h2>
    </footer>
  );
};

export default Footer;
