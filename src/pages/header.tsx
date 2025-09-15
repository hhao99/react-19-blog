import { Link } from 'wouter'
export default function Header() {
  return (
    <div className="flex justify-between border-b border-gray-300 pb-4">
      <h1 className="text-xxl font-bold mb-4">Personal blog with React 19</h1>
      
    <nav className="space-x-4">
        <Link href="/">Home</Link> 
        <Link href="/blog">Blog</Link> 
        <Link href="/about">About</Link>
    </nav>
      
    </div>
  )
}