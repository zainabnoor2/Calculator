  let currentExpression = '';
  const display = document.getElementById('display');

  function updateDisplay() {
    display.textContent = currentExpression || '0';
  }

  function appendToExpression(value) {
    if (currentExpression === 'Error') {
      currentExpression = '';
    }
    currentExpression += value;
    updateDisplay();
  }

  function appendOperator(operator) {
    if (currentExpression === '') return;

    const lastChar = currentExpression.slice(-1);
    if ('+-*/'.includes(lastChar)) {
      currentExpression = currentExpression.slice(0, -1);
    }
    currentExpression += operator;
    updateDisplay();
  }

  function calculate() {
    try {
      const result = eval(currentExpression);
      currentExpression = result.toString();
      updateDisplay();
    } catch {
      currentExpression = 'Error';
      updateDisplay();
      setTimeout(() => {
        clearDisplay();
      }, 1500);
    }
  }

  function clearDisplay() {
    currentExpression = '';
    updateDisplay();
  }
 
  function backspace() {
  if (currentExpression === 'Error') {
    currentExpression = '';
  } else {
    currentExpression = currentExpression.slice(0, -1);
  }
 
  updateDisplay();
}
