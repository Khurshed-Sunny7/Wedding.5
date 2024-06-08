// Массив гостей
const guests = [
    { name: "ой Иван Иванов", id: "1" },
    { name: "ая Мария Петрова", id: "2" },
    { name: "Алексей Сидоров", id: "3" }
    // Добавьте остальных гостей
];

// Получаем ID гостя из URL
const urlParams = new URLSearchParams(window.location.search);
const guestId = urlParams.get('guest');

// Находим гостя по ID
const guest = guests.find(g => g.id === guestId);

if (guest) {
    // Обновляем текст с именем гостя
    document.getElementById('guest-name').textContent = `Дорог${guest.name},`;
} else {
    document.getElementById('guest-name').textContent = `Дорогие друзья и семья,`;
}
