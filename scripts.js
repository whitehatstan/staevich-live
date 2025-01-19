document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    const trackInfo = document.getElementById('trackInfo');
    const volumeControl = document.getElementById('volume');
    const message = document.getElementById('message');
    const themeToggle = document.querySelector('.theme-toggle input');

    
    function updateTrackInfo() {
        fetch('https://api.radioparadise.com/api/gettrack?callback=?')
            .then(response => response.json())
            .then(data => {
                if (data.Track && data.Track.title) {
                    trackInfo.textContent = `Сейчас играет: ${data.Track.title}`;
                } else {
                    trackInfo.textContent = 'Загрузка...';
                }
            })
            .catch(error => {
                console.error('Ошибка при получении данных о треке:', error);
                trackInfo.textContent = 'Ошибка получения данных о треке.';
            });
    }

    
    setInterval(updateTrackInfo, 10000);

   
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
        message.textContent = `Громкость: ${Math.round(event.target.value * 100)}%`;
    });

    
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
    });
});
