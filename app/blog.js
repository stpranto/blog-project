import Link from 'next/link';
import blogData from '../data/blogData.json'; // Import your blog post data
import styles from './blog.module.css';
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
