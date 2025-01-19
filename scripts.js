document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    const trackInfo = document.getElementById('trackInfo');
    const volumeControl = document.getElementById('volume');
    const message = document.getElementById('message');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const progressBar = document.getElementById('progress');
    const themeToggle = document.getElementById('themeToggle');

    // Обновление информации о треке
    function updateTrackInfo() {
        trackInfo.textContent = 'Текущий трек: Прямой эфир';
    }

    // Инициализация
    updateTrackInfo();

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

    // Обновление прогресс-бара
    audio.addEventListener('timeupdate', () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    });

    // Переключение темы
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        message.textContent = 'Темная тема включена';
    });
});
