import { notFound } from "next/navigation";
import { DUMMY_POSTS } from "../../../src/assets/DUMMY_DATA";
import Padding from "../../../src/components/layout/padding";
import PostHero from "../../../src/components/Post/PostHero";

const Page = ({ params }) => {
  const dynamicUrl = params.slug;
  const post = DUMMY_POSTS.find((post) => post.slug === dynamicUrl);

  if (!post) {
    return notFound();
  }

  return (
    <Padding>
      <PostHero post={post} />
    </Padding>
  );
};

export default Page;
