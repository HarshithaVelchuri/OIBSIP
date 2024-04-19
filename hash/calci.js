let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function clearLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let result;
  try {
    // Replace 'mod' with '%' for modulo operation
    const expression = display.value.replace(/mod/g, '%');
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
}

function squareRoot() {
  const expression = display.value;
  let result;
  try {
    result = Math.sqrt(eval(expression));
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/[0-9+\-*\/.=]|Backspace|Enter/.test(key)) {
    event.preventDefault();
    if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      clearLastCharacter();
    } else {
      appendToDisplay(key);
    }
  }
});
