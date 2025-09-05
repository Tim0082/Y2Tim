const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('backgroundMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = '⏸️ Pause la musique';
    musicBtn.classList.add('playing');
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = '🎵 Jouer la musique';
    musicBtn.classList.remove('playing');
    isPlaying = false;
  }
});
