import React from "react";
import styles from "./page.module.css";

const Manifesto = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainText}>
          Where ideas are sacred, is infinite and connection is cosmic. A future
          where free expression expression is possible for every{" "}
          <span className={styles.hoverContainer}>
            curator&nbsp;
            <div className={styles.spanDescription}>
              <div>1.</div>
              <br />
              If you have imagination
              <br />
              you are a curator.
            </div>
          </span>
          in the universe.
        </div>
        <div className={styles.descriptionText}>
          <div className={styles.descriptionText_title}>
            For every curator1 in the universe. 01. OUR INTERNET IS BROKEN The
            year is 2023. There are 8 billion people on Earth. We live with the
            world at our fingertips. We cling to a pocket-sized portal that
            promises dreams of escape, but leaves us feeling empty.
          </div>
          <div className={styles.descriptionText_sub_title}>
            The year is 2023. There are 8 billion people on Earth. We live with
            the world at our fingertips. We cling to a pocket-sized portal that
            promises dreams of escape, but leaves us feeling empty.
          </div>
        </div>
      </div>
      <div className={styles.gradient}></div>
    </>
  );
};

export default Manifesto;
