export interface Item {
    id: number;
    title: string;
    description: string;
    category: string;
}

export function generateItems(count: number): Item[] {
    const categories = ['Tech', 'Science', 'Business', 'Sports'];
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        title: `Item ${i + 1}`,
        description: `Description for ${i + 1}`,
        category: categories[Math.floor(Math.random() * categories.length)],
    }));
}