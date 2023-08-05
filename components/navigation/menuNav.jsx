import React, { useState } from "react";
import ExternalLink from "../elements/external-link/external-link";

const MenuNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {" "}
      <div className={styles.menuContainer}>
        <div className={styles.menuBody}>
          <div className={styles.menuNav}>
            <div className={styles.menuHeader}>
              <p>Navigation</p>
              {navItems.map((data, index) => {
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
      </div>
    </div>
  );
};

export default MenuNav;
