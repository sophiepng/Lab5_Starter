// expose.js
let jsConfetti;

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img'); // Selecting the image within the expose section
  const volumeSlider = document.querySelector('#volume-controls input[type="range"]');
  const volumeIcon = document.querySelector('#volume-controls > img'); // Selecting the image within volume-controls
  const playButton = document.querySelector('#expose > button'); // Selecting the button within the expose section
  const audioElement = document.querySelector('#expose > audio'); // Selecting the audio within the expose section
  jsConfetti = new JSConfetti(); // Initialize the confetti cannon

  
  const hornData = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3'
    }
  };
  
  hornSelect.addEventListener('change', function() {
    const selectedHorn = this.value;
    if (hornData[selectedHorn]) {
      hornImage.src = hornData[selectedHorn].image;
      audioElement.src = hornData[selectedHorn].audio;
    } else {
      hornImage.src = 'assets/images/no-image.png'; // Default image if no horn selected
      audioElement.src = '';
    }
  });

  volumeSlider.addEventListener('input', function() {
    const volume = parseFloat(this.value);
    audioElement.volume = volume / 100; // Convert slider range (0-100) to audio range (0.0-1.0)

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', function() {
    if (audioElement.src) {
      audioElement.currentTime = 0; // Reset audio to the beginning
      audioElement.play();

      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti()
      }
    }
  });

}