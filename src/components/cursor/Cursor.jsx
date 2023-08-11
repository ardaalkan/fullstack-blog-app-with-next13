"use client";
import React, { useState, useEffect } from "react";
import styles from "./Cursor.module.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    console.log(mouseMove, "mouse move");

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log(mouseMove, "mouse move");
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate="default"
    />
  );
};

export default Cursor;
