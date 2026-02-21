export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    { id: 1, title: 'React Basics', instructor: 'John Doe', description: 'Learn the fundamentals.' },
    { id: 2, title: 'Advanced TS', instructor: 'Tom Reddle', description: 'Deep dive into types.' },
    { id: 3, title: 'React Router v6', instructor: 'Justin Bieber', description: 'Mastering navigation.' },
];

export const getCourseById = (id: number) => courses.find(c => c.id === id);