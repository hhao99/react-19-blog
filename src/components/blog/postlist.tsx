import type { Post, Posts } from '@/types/posts'
import { Link } from 'wouter'
import { usePostsStore } from '@/store/posts'
export function PostList() {
  const { posts } = usePostsStore( (state) => state as { posts: Posts } );
  return (
    <>
      {posts.map((post: Post,index: number) => (
        <PostItem key={`post-${index}`} post={post} />
      ))}
    </>
  )
}

function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="border border-gray-300 rounded p-4 mb-4 bg-white">
        <h2 className="text-2xl font-bold mb-2 border-b border-gray-300 pb-2">{post.title}</h2>    
      </div>
    </Link>
  )
}

 
