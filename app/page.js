import Link from 'next/link';
import styles from './index.module.css';
const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is a simple blog website built with Next.js.</p>
      <Link href="/blog">
        <a>Go to Blog</a>
      </Link>
    </div>
  );
};

export default Home;
