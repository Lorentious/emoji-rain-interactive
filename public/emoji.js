const socket = io();

// Client: Senden bei Button-Klick
if (document.getElementById('emoji-buttons')) {
  document.querySelectorAll('#emoji-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      socket.emit('emoji', button.textContent);
    });
  });
}

// Server: Empfangene Emojis anzeigen lassen
socket.on('emoji', emoji => {
  if (!document.body) return;

  const span = document.createElement('span');
  span.textContent = emoji;
  span.className = 'emoji';
  span.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(span);

  setTimeout(() => span.remove(), 3000);
});
