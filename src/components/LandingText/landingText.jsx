"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./landingText.module.css";

const LandingText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Elementin yüzde 10'u ekrana girdiğinde çalıştır.
  });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main>
      <motion.div
        className={styles.textContainer}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 2.5 }}
      >
        <div>
          Formula 1 is a globally acclaimed motorsport competition that garners
          immense interest. In these races, pilots engage in a fusion {" "}
          <span>speed </span>,&nbsp;technology, and{" "}
          <span>bravery, experiencing </span>
          adrenaline rushes at their peaks. Races held at Circuit de{" "}
          <span>Monaco</span> provide exhilarating moments for millions of
          spectators .{" "}
        </div>
      </motion.div>
    </main>
  );
};

export default LandingText;
