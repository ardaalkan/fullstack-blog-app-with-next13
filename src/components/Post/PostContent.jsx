import React from "react";
import styles from "./PostContent.module.css";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const PostContent = ({ post, isPostPage = false }) => {
  return (
    <div className={styles.main}>
      <div className={styles.categoryTitle}>
        <div>{post.category.title}</div>
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div>1 month ago</div>
      </div>
      <h2 className={`${isPostPage ? styles.postTitleBold : styles.postTitle}`}>
        {post.title}
      </h2>
      <p>{post.description}</p>
      {!isPostPage && (
        <div className={styles.readMore}>
          Read More <ArrowRight />
        </div>
      )}
    </div>
  );
};

export default PostContent;
