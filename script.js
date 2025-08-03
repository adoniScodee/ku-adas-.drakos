
function sendMessage() {
  const textarea = document.querySelector('.chatbox textarea');
  const message = textarea.value.trim();
  if (message) {
    alert('Mesaj gönderildi: ' + message);
    textarea.value = '';
  } else {
    alert('Lütfen bir mesaj yazın.');
  }
}
