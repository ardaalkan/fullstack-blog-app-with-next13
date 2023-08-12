/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../utils/imageData";
import f1Drivers2023 from "../../utils/driverData";
import styles from "./InfinifityImage.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const InfinityImage = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Elementin yüzde 10'u ekrana girdiğinde çalıştır.
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imgAnimation = {
    hiddenOne: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    showOne: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 0.5,
        duration: 1.0,
        ease: "easeInOut",
      },
      hidden: { opacity: 0 },
    },
  };

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textVariants}
      transition={{ duration: 1.0 }}
    >
      <motion.div ref={carousel} className={styles.carousel}>
        <h1>Popular F1 Drivers</h1>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {images.map((image, index) => {
            return (
              <motion.div
                ref={ref}
                animate={inView ? "showOne" : "hiddenOne"}
                className={styles.item}
                key={image}
                variants={imgAnimation}
                initial="hiddenOne"
              >
                <Image src={image} alt="" />
                <h2>{f1Drivers2023[index]}</h2>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InfinityImage;
