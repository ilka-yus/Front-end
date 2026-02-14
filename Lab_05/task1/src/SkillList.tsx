import type { Skill } from './types';
import type { SkillLevel } from './types';

interface SkillListProps {
    skills: Skill[];
}

const getLevelColor = (level: SkillLevel): string => {
    switch (level) {
        case 'Beginner': return 'gray';
        case 'Intermediate': return 'red';
        case 'Expert': return 'green';
        default: return 'black';
    }
};

const SkillList = ({ skills }: SkillListProps) => {
    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.id} style={{ color: getLevelColor(skill.level), fontWeight: 'bold' }}>
                    {skill.name} - {skill.level}
                </li>
            ))}
        </ul>
    );
};

export default SkillList;