const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('.idea-card').forEach((card) => {
  card.addEventListener('click', () => showToast(card.dataset.message));
});

const challenges = [
  'Regala un cumplido sincero.',
  'Dibuja una nube con cara feliz.',
  'Baila tu canción favorita por un minuto.',
  'Encuentra algo bonito que normalmente no notas.',
  'Inventa un nombre divertido para tu día.'
];
let challengeIndex = 0;
document.querySelector('#challenge-button').addEventListener('click', () => {
  challengeIndex = (challengeIndex + 1) % challenges.length;
  const text = document.querySelector('#challenge-text');
  text.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 250 });
  text.textContent = challenges[challengeIndex];
});

document.querySelector('#mood-button').addEventListener('click', () => {
  document.body.classList.toggle('sunny');
  const sunnier = document.body.classList.contains('sunny');
  document.querySelector('#mood-label').textContent = sunnier ? '¡Más sol!' : 'Subir el ánimo';
  showToast(sunnier ? '¡Un poquito más de sol para ti! ☀' : 'La chispa sigue aquí. ✨');
});
