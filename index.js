const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn')

function reverseString(str) {
  return str.split('').reverse().join('')
}

function check(){
  const value = inputEl.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert('P A L I N D R O M E')
  } else {
    alert('Not a P A L I N D R O M E')
  }

  inputEl.value = ''
}

btnEl.addEventListener('click', () =>{
  check()
})