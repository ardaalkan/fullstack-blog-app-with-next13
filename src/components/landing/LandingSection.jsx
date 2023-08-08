"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./landing.module.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { opacity } from "./textAnim";
// import imgAnimation from "./openAnim";

import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "./data.js";

const imgAnimation = {
  hiddenOne: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  showOne: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 2.5,
      duration: 2.0,
      ease: "easeInOut",
    },
  },
  hiddenTwo: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  showTwo: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 2.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
  hiddenThree: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  showThree: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 2.7,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const LandingSection = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "Passion",
    "Acceleration",
    "Thrill",
    "Time",
    "Speed",
    "Rage",
    "Focus",
    "Power",
    "Precision",
    "Victory",
    "Adrenaline",
    "Championship",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [index, words.length]);

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const speed = 0.006;
  let xForce = 0;
  let yForce = 0;
  let requestAnimationFrameId = null;
  const easing = 0.08;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });
    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <motion.div
        ref={plane1}
        className={styles.plane}
        variants={imgAnimation}
        initial="hiddenOne"
        animate="showOne"
      >
        <Image alt="image" src={floating1} width={250} />
        <Image alt="image" src={floating2} width={250} />
        <Image alt="image" src={floating3} width={225} />
      </motion.div>
      <motion.div
        ref={plane2}
        className={styles.plane}
        variants={imgAnimation}
        initial="hiddenTwo"
        animate="showTwo"
      >
        <Image alt="image" src={floating4} width={150} />
        <Image alt="image" src={floating5} width={200} />
        <Image alt="image" src={floating6} width={200} />
      </motion.div>
      <motion.div
        ref={plane3}
        className={styles.plane}
        variants={imgAnimation}
        initial="hiddenThree"
        animate="showThree"
      >
        <Image alt="image" src={floating7} width={250} />
        <Image alt="image" src={floating8} width={300} />
      </motion.div>
      <div className={styles.title}>
        <h1>F1 Image Gallery & Blog</h1>
        <motion.p
          variants={opacity}
          initial="inital"
          enter="enter"
          animate="enter"
        >
          {words[index]}
        </motion.p>
      </div>
    </main>
  );
};

export default LandingSection;
