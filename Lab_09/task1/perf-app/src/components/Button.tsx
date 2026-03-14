import { memo } from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

//Кнопка мемоизирована, она изменится только если изменится ссылка на onClick
export const Button = memo(function Button({ onClick, label }: ButtonProps) {
    console.log(`Button '${label}' render`);
    return (
        <button onClick={onClick} style={{ margin: '5px' }}>
            {label}
        </button>
    );
});