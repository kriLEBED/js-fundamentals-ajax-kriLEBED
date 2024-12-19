// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById('userNameInput');
const getUserButton = document.getElementById('getUserButton');
const userCitySpan = document.getElementById('userCity');

getUserButton.addEventListener('click', async () => {
    const userName = userNameInput.value.trim();
    if (!userName) {
        userCitySpan.textContent = 'Please enter a user name.';
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());

        if (user) {
            userCitySpan.textContent = `City: ${user.address.city}`;
        } else {
            userCitySpan.textContent = 'User not found.';
        }
    } catch (error) {
        userCitySpan.textContent = 'Error fetching user data.';
        console.error('Помилка:', error);
    }
});