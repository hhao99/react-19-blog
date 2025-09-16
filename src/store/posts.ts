import { create } from "zustand";
import type { Post, Posts } from '@/types/posts'
interface PostsState {
  posts: Posts;
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}
export const usePostsStore = create<PostsState>((set) => ({
  posts: [] as Posts,
  addPost: (post: Post) => set((state: PostsState) => ({ posts: [...state.posts, post] })),
  removePost: (id: string) => set((state: PostsState) => ({ posts: state.posts.filter((post: Post) => post.id !== id) })),
}));

