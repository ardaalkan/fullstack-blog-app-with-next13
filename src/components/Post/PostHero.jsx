import React from 'react'
import PostContent from "./PostContent"
import Image from 'next/image'

const PostHero = ({post}) => {
  return (
    <div>
        <PostContent isPostPage={true} post={post}/>
        <Image src={post.image} width={1200} height={500} alt={post.title}/>
    </div>
  )
}

export default PostHero