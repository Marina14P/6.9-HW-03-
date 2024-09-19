document.addEventListener('DOMContentLoaded', () => {
    // Логика загрузки чатов и сообщений
});


console.log("Frontend is working!");

// Пример использования fetch для получения списка чатов
fetch('/api/chats/')
    .then(response => response.json())
    .then(data => {
        console.log("Chats:", data);
        // Здесь можно динамически отобразить список чатов
    })
    .catch(error => console.error('Error fetching chats:', error));
