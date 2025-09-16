import type { Post } from '@/types/posts'
import { Link, useParams, useLocation} from 'wouter'
import { usePostsStore } from '@/store/posts'
import { set } from 'zod';
export function Post() {
  const id = useParams().id;
  const [_,setLocation] = useLocation();
  const { posts, removePost } = usePostsStore( (state) => state as { posts: Post[], removePost: (id: string) => void } );
  if (!id) {
    return <div>Post ID is missing</div>;
  }
  const post:Post|undefined = posts.find((p) => p.id === id);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 bg-white">
      <h2 className="text-2xl font-bold mb-2 border-b border-gray-300 pb-2">{post.title}</h2>
      <p className="text-lg">{post.content}</p>
      <div className='flex justify-end border-gray-300'>
        <Link href="#" 
          className="text-blue-500 hover:underline mt-4 text-right inline-block"
          onClick={(e)=>{
            e.preventDefault();
            removePost(post.id);
            setLocation('/blog');
            
          }}
          >Delete this blog</Link>
      </div>
      <div className='flex justify-end border-gray-300'>
        <Link href="/blog" className="text-blue-500 hover:underline mt-4 text-right inline-block">Back to Blog</Link>
      </div>
      
    </div>
  )
}