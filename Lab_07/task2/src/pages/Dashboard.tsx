export default function Dashboard() {
    if (Math.random() > 0) { throw new Error('CRASH!'); }
    return <h1>Dashboard Page</h1>;
}