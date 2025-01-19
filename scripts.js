document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    const trackInfo = document.getElementById('trackInfo');
    const volumeControl = document.getElementById('volume');
    const message = document.getElementById('message');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const themeToggle = document.getElementById('themeToggle');

    // Функция для обновления текущего трека
    function updateTrackInfo() {
        fetch(' ')
            .then(response => response.json())
            .then(data => {
                if (data.Track && data.Title) {
                    trackInfo.textContent = `Сейчас играет: ${data.Track.Title}`;
                } else {
                    trackInfo.textContent = 'Загрузка...';
                }
            }).catch(error => {
                console.error('Ошибка при получении данных о треке:', error);
                trackInfo.textContent = 'Ошибка получения данных о треке.';
            });
    }

    // Автоматическая проверка текущего трека каждые 10 секунд
    setInterval(updateTrackInfo, 10000);

    // Обработка событий для кнопок Play и Pause
    playBtn.addEventListener('click', () => {
        audio.play();
        message.textContent = 'Воспроизведение начато';
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
        message.textContent = 'Воспроизведение приостановлено';
    });

    // Регулировка громкости
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

    // Обработка переключателя тем
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        message.textContent = 'Темная тема включена';
    });
});
