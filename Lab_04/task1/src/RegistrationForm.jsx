import React, { useState } from 'react';

const RegistrationForm = () => {
    // Состояния для полей ввода
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    // Состояния для ошибок
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');

    // Состояние успешной отправки
    const [success, setSuccess] = useState(false);

    // Функции валидации
    const validateName = (val) => {
        if (!val) return 'Name is required';
        if (val.length < 2) return 'Name must be at lest 2 characters';
        return '';
    };

    const validateEmail = (val) => {
        const regex = /[\s@]+@[\s@]+\.[\s@]+/;
        if (!val) return 'Email is required';
        if (!regex.test(val)) return 'Invalid email format';
        return '';
    };

    const validateAge = (val) => {
        if (!val) return 'Age is required';
        if (isNaN(val) || Number(val) < 18) return 'You must be 18 or older';
        return ''; 
    };

    // Обработчик отправки
    const handleSubmit = (e) => {
        e.preventDefault(); 

        // Валидируем все поля перед отправкой
        const nErr = validateName(name);
        const eErr = validateEmail(email);
        const aErr = validateAge(age);

        setNameError(nErr);
        setEmailError(eErr);
        setAgeError(aErr);

        if (!nErr && !eErr & !aErr) {
            setSuccess(true);
            setName('');
            setEmail('');
            setAge('');
        } else {
            setSuccess(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <h2>Registration Form</h2>
            {success && <p style={{ color: 'green' }}>Registration successful!</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => {
                            const val = e.target.value;
                            setName(val);
                            setNameError(validateName(val));
                        }}
                    />
                    {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => {
                            const val = e.target.value;
                            setEmail(val);
                            setEmailError(validateEmail(val));
                        }}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </div>

                <div>
                    <label>Age:</label>
                    <input
                        type='number'
                        value={age}
                        onChange={(e) => {
                            const val = e.target.value;
                            setAge(val);
                            setAgeError(validateAge(val));
                        }}
                    />
                    {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;