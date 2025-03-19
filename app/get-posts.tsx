import postsData from "./posts.json";

export type Post = {
    id: string;
    date: string;
    title: string;
};

export const getPosts = async () : Promise<Post[]> => {
    return postsData.posts.map(post => ({
        ...post,
    }));
};