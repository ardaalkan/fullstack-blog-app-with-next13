import React from "react";
import styles from "./linkStyle.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../anim";

const ExternalLink = ({ data }) => {
  return (
    <motion.div
      variants={slide}
      animate="enter"
      exit="exit"
      initial="inital"
      className={styles.link}
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default ExternalLink;
