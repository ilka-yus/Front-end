import type { User } from './types';

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: React.ReactNode;
}

const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', opacity: isActive ? 1 : 0.5 }}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className='bio-section'>
                {children}
            </div>
        </div>
    );
};

export default UserCard;