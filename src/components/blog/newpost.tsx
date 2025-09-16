import { useActionState } from 'react'
import type { Post } from '@/types/posts'
import { usePostsStore } from '@/store/posts'
export function NewPost() {
  const { addPost } = usePostsStore( (state) => state as { addPost: (post: Post) => void } );
  
  const [state, formAction, isPending] = useActionState( (preState, formData)=> {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    if (!title || !content) {
      return { error: 'Title and content are required' };
    }
    const newPost: Post = { id: Date.now().toString(), title, content };
    addPost(newPost);
    return { success: true };
  },null);
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 bg-white">
        <form action={formAction} className="flex flex-col">
            <label htmlFor='title' className="block mb-2 font-bold">Title:</label>
            <input type="text" id="title" name="title" className="w-full border border-gray-300 rounded p-2 mb-4" required />
            <label htmlFor='content' className="block mb-2 font-bold">Content:</label>
            <textarea id="content" name="content" className="w-full border border-gray-300 rounded p-2 mb-4" rows={4} required></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={isPending}>
                {isPending ? 'Adding...' : 'Add Post'}
            </button>
            {state?.error && <p className="text-red-500 mt-2">{state.error}</p>}
            {state?.success && <p className="text-green-500 mt-2">Post added successfully!</p>}
        </form>
    </div>
  )
}