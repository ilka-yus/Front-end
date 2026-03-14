import { useState, useCallback, useMemo } from 'react';
import { UserCard } from './components/UserCard';
import { AnalyticsChart } from './components/AnalyticsChart';
import { Button } from './components/Button';

export default function Dashboard() {
    const [count, setCount] = useState(0);
    const [items] = useState(['item1', 'item2', 'item3']);
    
    const user = useMemo(() => ({
      id: 1,
      name: 'Justin Bieber',
      email: 'justinbieber@gmail.com'
    }), []);

    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []);
    
    const handleSimpleLog = useCallback(() => {
        console.log('Action triggered');
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Performance Dashboard</h1>
            <p>Counter: <strong>{count}</strong></p>

            <Button onClick={handleIncrement} label='Increment Counter' />
            <Button onClick={handleSimpleLog} label='Log Action' />

            <hr />
            <UserCard user={user} />
            <AnalyticsChart items={items}/>
        </div>
    );
}