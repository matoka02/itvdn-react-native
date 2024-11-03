// Валидация эл.почты
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

// Валидация пароля (н-р, 6 символов)
export const validatePassword = (password) => {
    return password.length >= 6;
};