import postsData from "./posts.json";

export type PostType = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

export const getPosts = () => {
  return postsData.posts.map((post) => {
    return {
      ...post,
    }
  });
}