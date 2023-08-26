import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link href={`/post/${post.slug}`}>
        <Image src={post.image} height={300} width={600} alt={post.title} />
        <div>{post.title}</div>
      </Link>
    </div>
  );
};

export default PostCard;
