import { useRouter } from 'next/router';
import blogData from '../../data/blogData.json'; // Import your blog post data
import styles from './post.module.css';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the matching id
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
