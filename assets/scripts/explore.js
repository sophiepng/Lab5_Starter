// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore > button');
  const speechTextarea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore > img');

  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear previous options

    const defaultOption = document.createElement('option');
    defaultOption.value = 'select';
    defaultOption.textContent = 'Select Voice:';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
  populateVoiceList(); // Call it once on load in case voices are already available

  talkButton.addEventListener('click', function() {
    const text = speechTextarea.value;
    const selectedVoiceName = voiceSelect.value;
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    if (text && selectedVoice) {
      const speak = new SpeechSynthesisUtterance(text);
      speak.voice = selectedVoice;

      // Swap face while speaking
      faceImage.src = 'assets/images/smiling-open.png';
      speak.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      speechSynthesis.speak(speak);
    }
  });
}