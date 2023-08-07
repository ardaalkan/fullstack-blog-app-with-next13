import React from "react";
import Link from "next/link";
import styles from "./external-link.module.css";

const ExternalLink = ({ data }) => {
  return (
    <div className={styles.Link}>
      <Link href={data.href}>{data.title}</Link>
    </div>
  );
};

export default ExternalLink;
