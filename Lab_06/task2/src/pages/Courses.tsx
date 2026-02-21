import { Link, useSearchParams } from 'react-router-dom';
import { courses } from '../data';

export default function Courses() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get('sort') || 'asc';

    const sorted = [...courses].sort((a, b) => 
        sortOrder === 'desc'
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
    );

    return (
        <div>
            <h2>Available Courses</h2>
            <button onClick={() => setSearchParams({ sort: sortOrder === 'asc' ? 'desc' : 'asc'})}>
                Sort: {sortOrder.toUpperCase()}
            </button>
            <ul>
                {sorted.map(course => (
                    <li key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}