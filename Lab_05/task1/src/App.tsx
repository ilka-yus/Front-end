import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User } from './types';
import type { Skill } from './types';

function App() {
  // Тестовые данные для пользователя
  const sampleUser: User = {
    name: 'Ivan Ivanov',
    email: 'ivan@example.com',
    age: 20
  };  

  // Тестовые данные для навыков
  const sampleSkills: Skill[] = [
    { id: 1, name: 'React', level: 'Intermediate' },
    { id: 2, name: 'TypeScript', level: 'Beginner' },
    { id: 3, name: 'CSS', level: 'Expert' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Typed Component</h1>
      <UserCard user={sampleUser} isActive={true}>
        <p><strong>Bio:</strong> Frontend developer</p>
      </UserCard>

      <h3>Skills:</h3>
      <SkillList skills={sampleSkills} />
    </div>
  );
}

export default App;