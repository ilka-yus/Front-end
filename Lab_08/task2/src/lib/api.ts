import { Post, Author, User, Notification } from '../types';

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

export function getCurrentUser(): User {
    return {
        id: "user-123",
        name: "Demo User",
        email: "demo@example.com",
        avatar: "/avatars/demo.jpg",
        role: "user",
    };
}

export async function getUserNotifications(userId: string): Promise<Notification[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [
        { id: "1", type: "info", message: "Welcome to the dashboard!", read: false, createdAt: "2026-03-01" },
        { id: "2", type: "success", message: "Your profile was updated", read: true, createdAt: "2026-02-28" },
    ];
}

export async function getUserAnalytics(userId: string) {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
        pageViews: Math.floor(Math.random()* 10000),
        sessions: Math.floor(Math.random()* 1000),
        bounceRate: Math.random() * 100,
    };
}