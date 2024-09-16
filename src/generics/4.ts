type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(data: Partial<User>): User {
  // Деякі значення за замовчуванням:
  const initialValues: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...initialValues, ...data };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});