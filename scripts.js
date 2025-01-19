document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    const trackInfo = document.getElementById('trackInfo');
    const volumeControl = document.getElementById('volume');
    const message = document.getElementById('message');

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
            };
    }

    // Автоматическая проверка текущего трека каждые 10 секунд
    setInterval(updateTrackInfo, 10000);

    // Обработка событий для кнопок Play и Pause
    playBtn.addEventListener('click', () => {
        audio.play();
        trackInfo.textContent = 'Трек: Воспроизведение началось';
        message.textContent = 'Прямо сейчас слушаю: ' + trackInfo.textContent;
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
        trackInfo.textContent = 'Трек: Пауза';
        message.textContent = 'Воспроизведение приостановлено.';
    });

    // Регулировка громкости
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

    // Обработка переключателя тем
    themeToggle.onclick(() => {
        document.body.classList.toggle('dark-theme');
    });

    // Отображение сообщений
    playBtn.addEventListener('click', () => {
        message.textContent = 'Воспроизведение начато';
    });

    pauseBtn.addEventListener('click', () => {
        message.textContent = 'Воспроизведение приостановлено';
    });

    // Логика для переключателя тем
    themeToggle.onclick(() => {
        document.body.classList.toggle('dark-theme');
        message.textContent = 'Темная тема включена';
    });

    // Сообщение при изменении громкости
    volumeControl.addEventListener('input', (event) => {
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

    // Управление паузой
    pauseBtn.addEventListener('click', () => {
        audio.pause();
        message.textContent = 'Воспроизведение приостановлено';
    });

    // Управление воспроизведением
    playBtn.addEventListener('click', () => {
        audio.play();
        message.textContent = 'Воспроизведение начато';
    });

    // Событие при изменении громкости
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

    // Обработка смены тем
    themeToggle.onclick(() => {
        document.body.classList.toggle('dark-theme');
        message.textContent = 'Темная тема включена';
    });

    // Управление громкостью
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

  
