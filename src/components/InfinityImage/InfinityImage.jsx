/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../utils/imageData";
import f1Drivers2023 from "../../utils/driverData";
import styles from "./InfinifityImage.module.css";
import Image from "next/image";

const InfinityImage = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(images);
  return (
    <div>
      <motion.div ref={carousel} className={styles.carousel}>
        <h1>Popular F1 Drivers</h1>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {images.map((image, index) => {
            return (
              <motion.div className={styles.item} key={image}>
                <Image src={image} alt="" />
                <h2>{f1Drivers2023[index]}</h2>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfinityImage;
