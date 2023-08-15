import React from "react";
import Padding from "../../src/components/layout/padding";
import styles from "../page.module.css";
import PostCard from "../../src/components/Post/PostCard";
import { DUMMY_POSTS } from "../../src/assets/DUMMY_DATA";

const Page = () => {
  return (
    <Padding>
      <main className={styles.main}>
        <PostCard post={DUMMY_POSTS[0]} />
      </main>
    </Padding>
  );
};

export default Page;
