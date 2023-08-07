import React from "react";
import "./DetailTextStyle.css";
import useMousePosition from "../../utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

const MaskingText = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 350 : 50;

  return (
    <main className="main">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          className="mask-p"
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
          <span className="mask-span">
            high-speed chicanes, creating an awe-inspiring spectacle for
            spectators.
          </span>
        </p>
      </motion.div>
      <motion.div className="body">
        <p className="body-p">
          Overall, Formula 1 transcends being a mere sport; it embodies a blend
          of cutting-edge technology, human prowess, and thrilling drama. Its
          global popularity attests to its universal appeal, uniting racing
          enthusiasts and casual viewers alike in the excitement of witnessing
          extraordinary
          <span className="body-span">
            {" "}
            feats of skill and bravery on the world's most prestigious racing
            circuits.
          </span>
        </p>
      </motion.div>
    </main>
  );
};

export default MaskingText;
