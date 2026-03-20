import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/types';
import { getAllPosts, getAuthorById, getPostById } from '@/lib/api';
import styles from "@/styles/Blog.module.css";

interface PostProps {
    post: Post;
    author: { name: string, bio: string };
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.postMeta}>Written by {author.name}</p>
      
      <article className={styles.content}>
        {post.content}
      </article>

      <div>
        {post.tags.map(tag => <span key={tag}>#{tag} </span>)}
      </div>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () =>{
    const posts = await getAllPosts();
    return {
        paths: posts.map(post => ({ params: { id: post.id } })),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostById(params?.id as string);
    if (!post) return { notFound: true };

    const author = await getAuthorById(post.author);
    return {
        props: { post, author },
        revalidate: 60,
    };
};