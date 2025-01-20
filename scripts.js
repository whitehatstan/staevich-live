const audioElement = document.getElementById('live-audio');
   const volumeSlider = document.getElementById('volume-slider');
   const volumePercentage = document.getElementById('volume-percentage');

   function updateVolume(value) {
    const volume = value / 100;
    audioElement.volume = volume;
    volumePercentage.textContent = `${value}%`;
   }

   volumeSlider.addEventListener('input', (event) => {
    updateVolume(event.target.value);
