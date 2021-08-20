function add(a, b) {
  if (typeof a === "string" && typeof b !== "string") {
    a = Number(a);
    return a + b;
  }
  else if (typeof b === "string" && typeof a !== "string") {
    b = Number(b);
    return a + b;
  }
  else {
    return Number(a) + Number(b);
  }
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  if (operation == "+") {
    return add(a, b);
  }
  else if (operation == "-") {
    return subtract(a, b);
  }
  else if (operation == "*") {
    return multiply(a, b);
  }
  else {
    return divide(a, b);
  }
}

let display = document.getElementById('display')
let buttons = document.querySelectorAll('button');
let memoryVal = document.getElementById('memoryVal');
let memoryOp = document.getElementById('memoryOp')

function parser(e) {
  if (e.target.innerHTML == "C") {
    clearDisplay() // clear the screen
  }
  else if (!isNaN(e.target.innerHTML) || e.target.innerHTML == ".") {
    if (display.innerHTML != "" && memoryVal.innerHTML == "") {
      clearDisplay();
      display.innerHTML = display.innerHTML + e.target.innerHTML;
      memoryVal.innerHTML = display.innerHTML;
    }
    else {
      display.innerHTML = display.innerHTML + e.target.innerHTML;
      memoryVal.innerHTML = display.innerHTML;
    }
  }
  else if (e.target.innerHTML == "+" || e.target.innerHTML == "-" ||
           e.target.innerHTML == "*" || e.target.innerHTML == "/") {
             if (memoryOp.innerHTML == "") {
               memoryOp.innerHTML = e.target.innerHTML;
               memoryVal.innerHTML = display.innerHTML;
               clearDisplay();
             }
             else {
               memoryVal.innerHTML = display.innerHTML; // copy result
               memoryOp.innerHTML = e.target.innerHTML;
             }
  }
  else {
    display.innerHTML = operate(memoryOp.innerHTML, memoryVal.innerHTML, display.innerHTML);
  }
}

function clearDisplay() {
  display.innerHTML = "";
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => parser(e))
});
