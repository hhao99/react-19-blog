import { NewPost } from "@/components/blog/newpost"
import { PostList } from "@/components/blog/postlist"
export default function Blog() {
  return (
    <div className="flex flex-col justify-start  p-4 bg-gray-100 w-full">
      <h1 className="text-lg font-bold mb-4">Blog Page</h1>
      <PostList />
      <NewPost />
    </div>
  )
}