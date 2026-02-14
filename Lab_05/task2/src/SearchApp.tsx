import React, { useState } from 'react';
import type { User } from './types.ts';
import UserCard from './UserCard.tsx';

const INITIAL_DATA: User[] = [
    { name: 'Alice', email: 'alice@example.com', age: 19 },
    { name: 'Bob', email: 'bob@example.com', age: 25 },
    { name: 'Edward', email: 'ed@example.com', age: 17 },
    { name: 'Tomas', email: 'tomas@example.com', age: 18 },
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
    
        const filtered = users.filter((u) => u.name.toLowerCase().includes(term.toLowerCase()));
        setFilteredUsers(filtered);
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchTerm('');
        setFilteredUsers(users);
    };

    return (
        <div style={{ padding: '20px' }}>
            <input 
                type='text'
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Search users ...'
            />
            <button onClick={handleClear}>Clear</button>

            <div style={{ marginTop: '20px' }}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UserCard key={user.email} user={user}>
                            <p>Status: Active</p>
                        </UserCard>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchApp;