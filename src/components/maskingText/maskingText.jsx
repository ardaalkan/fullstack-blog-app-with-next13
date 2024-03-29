/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import styles from "../maskingText/masking.module.css";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MaskingText = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 350 : 50;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Elementin yüzde 10'u ekrana girdiğinde çalıştır.
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className={styles.main}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <p
            className={styles.maskP}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Monaco Grand Prix, renowned for its narrow streets, fast straights,
            and breathtaking scenery, stands as an iconic race in the Formula 1
            calendar. Racing through the picturesque streets of Monaco, drivers
            must demonstrate precision and finesse while tackling hairpin turns
            and
            <span className={styles.maskS}>
              high-speed chicanes, creating an awe-inspiring spectacle for
              spectators.
            </span>
          </p>
        </motion.div>
        <motion.div className={styles.body}>
          <p>
            Overall, Formula 1 transcends being a mere sport; it embodies a
            blend of cutting-edge technology, human prowess, and thrilling
            drama. Its global popularity attests to its universal appeal,
            uniting racing enthusiasts and casual viewers alike in the
            excitement of witnessing extraordinary
            <span>
              {" "}
              feats of skill and bravery on the world's most prestigious racing
              circuits.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default MaskingText;
