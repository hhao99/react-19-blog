import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(200),
  content: z.string().min(1),
});

export type Post = z.infer<typeof PostSchema>;
export const PostsSchema = z.array(PostSchema);
export type Posts = z.infer<typeof PostsSchema>;