const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn')
const overlay = document.getElementById('overlay');


function showOverlay(message, color = '#333') {
  overlay.textContent = message;
  overlay.style.backgroundColor = color;
  overlay.classList.add('show');

  // Hide after 3 seconds
  setTimeout(() => {
    overlay.classList.remove('show');
  }, 3000);
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

function check() {
  const value = inputEl.value.trim();
  const reverse = reverseString(value);

  if (!value) {
    showOverlay('Please type something!', '#e74c3c'); // red for error
  } else if (value === reverse) {
    showOverlay('✅ P A L I N D R O M E', 'green'); // green for success
  } else {
    showOverlay('❌ Not a P A L I N D R O M E', '#e74c3c');
  }

  inputEl.value = '';
}function check() {
  const value = inputEl.value.trim();
  const reverse = reverseString(value);

  if (!value) {
    showOverlay('Please type something!', '#e74c3c'); // red for error
  } else if (value === reverse) {
    showOverlay('✅ P A L I N D R O M E', 'green'); // green for success
  } else {
    showOverlay('❌ Not a P A L I N D R O M E', '#e74c3c');
  }

  inputEl.value = '';
}

btnEl.addEventListener('click', check);