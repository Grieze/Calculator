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
let memoryVal1 = document.getElementById('memoryVal1');
let memoryVal2 = document.getElementById('memoryVal2');
let memoryOp = document.getElementById('memoryOp')

function clearDisplay() {
  display.innerHTML = "";
}

function clearAll() {
  display.innerHTML = "";
  memoryVal1.innerHTML = "";
  memoryVal2.innerHTML = "";
  memoryOp.innerHTML = "";
}

function parser(e) {
  if (e.target.innerHTML == "C") {
    clearDisplay() // clear the screen
  }
  else if (e.target.innerHTML == "AC") {
    clearAll();
  }
  // for digits and period
  else if (!isNaN(e.target.innerHTML) || e.target.innerHTML == ".") {
    display.innerHTML = display.innerHTML + e.target.innerHTML;
  }
  // for operations
  else if (e.target.innerHTML == "+" || e.target.innerHTML == "-" ||
           e.target.innerHTML == "*" || e.target.innerHTML == "/") {
             if (memoryOp.innerHTML == "" && memoryVal1.innerHTML == "") {
               memoryOp.innerHTML = e.target.innerHTML;
               memoryVal1.innerHTML = display.innerHTML;
               clearDisplay();
             }
             else {
               memoryVal2.innerHTML = display.innerHTML;
               memoryOp.innerHTML = e.target.innerHTML;
             }
  }
  else {
    memoryVal2.innerHTML = display.innerHTML;
    display.innerHTML = operate(memoryOp.innerHTML, memoryVal1.innerHTML, memoryVal2.innerHTML);
    memoryVal1.innerHTML = "";
    memoryVal2.innerHTML = "";
    memoryOp.innerHTML = "";
  }
}


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => parser(e))
});
