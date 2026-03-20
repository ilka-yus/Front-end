import { Post, Author } from '../types';

const authors: Author[] = [
    { id: '1', name: 'John Doe', bio: 'Tech writer', avatar: '/avatars/...' },
    { id: '2', name: 'Jane Smith', bio: 'React expert', avatar: '/avatars/...' },
];

const posts: Post[] = [
    {
        id: '1',
        title: 'Getting Started with Next.js',
        content: 'Next.js is a React framework that enables server-side rendering...',
        author: '1',
        date: '2026-03-01',
        tags: ['next.js', 'react'],
        readTime: 5,
    },
    {
        id: '2',
        title: 'Mastering SSR',
        content: 'Server-side rendering is powerful for SEO...',
        author: '2',
        date: '2026-03-05',
        tags: ['ssr', 'webdev'],
        readTime: 8,
    }
];

export async function getAllPosts(): Promise<Post[]> {
    return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
    return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
    return authors.find(a => a.id === id);
}