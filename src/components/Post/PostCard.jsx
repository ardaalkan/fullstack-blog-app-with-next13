import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PostCard.module.css";
import PostContent from "./PostContent";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.main}>
      <Image src={post.image} height={300} width={600} alt={post.title} className={styles.postCartImage}/>
      {/* <div>{post.title}</div> */}
      {/* Post Content Componenet */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
