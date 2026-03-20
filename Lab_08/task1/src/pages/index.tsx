import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Post } from '../types';
import { getAllPosts } from '../lib/api';
import styles from "@/styles/Blog.module.css";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Blog</h1>
      <div className={styles.postList}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`/posts/${post.id}`} className={styles.postTitle}>
              {post.title}
            </Link>
            <p className={styles.postMeta}>
              By <strong>{post.author}</strong> | {post.readTime} min read
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
};