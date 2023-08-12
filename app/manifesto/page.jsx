"use client";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Manifesto = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Elementin yüzde 10'u ekrana girdiğinde çalıştır.
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        className={styles.main}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 1.5 }}
      >
        <div className={styles.mainText}>
          F1 goes beyond merely speed. Each race provides a platform for teams
          and drivers to express themselves freely. The designs of the racing
          cars are brimming with{" "}
          <span className={styles.hoverContainer}>
            engineering{" "}
            <div className={styles.spanDescription}>
              <div>1.</div>
              <br />
              Technical design and innovation
              <br />
              in practical applications.
            </div>
          </span>{" "}
          marvels, each one a work of art.
        </div>
        <div className={styles.descriptionText}>
          <div className={styles.descriptionText_title}>
            In the realm of F1, speed becomes art. Teams and drivers unite in
            the pursuit of excellence, pushing the boundaries of engineering,
            design, and human potential. A symphony of power, precision, and
            strategy unfolds on the track, where every moment is a testament to
            innovation. F1 isn't just a race; it's a celebration of human
            ingenuity, where the road to victory is paved with dedication and
            courage. Welcome to a world where{" "}
            <span className={styles.hoverContainer}>
              limits{" "}
              <div className={styles.spanDescription}>
                <div>2.</div>
                <br />
                Boundaries that define the
                <br />
                extent of possibilities.
              </div>
            </span>{" "}
            are shattered and dreams accelerate.
          </div>
        </div>
      </motion.div>
      <div className={styles.gradient}></div>
    </>
  );
};

export default Manifesto;
