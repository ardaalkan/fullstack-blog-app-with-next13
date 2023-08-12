"use client";
import React, { useRef, useEffect } from "react";
import styles from "./InfiniteText.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const InfiniteText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    // eslint-disable-next-line no-dupe-keys
    gsap.set(secondText.current, { xPercent, xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.05 * direction;
  };

  return (
    <div className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <p ref={firstText}>MONACO AUSTRIA HUNGARY NETHERLANDS JAPAN &nbsp; </p>
        <p ref={secondText}>MONACO AUSTRIA HUNGARY NETHERLANDS JAPAN &nbsp; </p>
      </div>
    </div>
  );
};

export default InfiniteText;
