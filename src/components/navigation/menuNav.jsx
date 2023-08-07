import React, { useState } from "react";
import styles from "./menuNav.module.css";
import { usePathname } from "next/navigation";
import ExternalLink from "./Link/ExternalLink";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";

const NavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Manifesto",
    href: "/manifesto",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const MenuNav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      initial="initial"
      exit="exit"
      className={styles.menuContainer}
    >
      <div className={styles.menuBody}>
        <div className={styles.menuNav}>
          <div className={styles.menuHeader}>
            <p>Navigation</p>
            {NavItems.map((data, index) => {
              return (
                <ExternalLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></ExternalLink>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuNav;
