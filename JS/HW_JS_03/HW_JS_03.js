// Функции нужны для того, чтобы использовать повторяющийся код в разных частях программы.
// Аргументы нужны для того, чтобы при вызове функции инициализировать ее параметры и передать этим параметрам 
// необходимые значения.

let number1 = prompt(`Enter the 1-st number`);
while (Number.isNaN(+number1) || number1 === null || number1 === '') {
  number1 = prompt(`Enter the 1-st number correctly, please`);
}

let number2 = prompt(`Enter the 2-nd number`);
while (Number.isNaN(+number2) || number2 === null || number2 === '') {
  number2 = prompt(`Enter the 2-nd number correctly, please`);
}

let mathOperator = prompt(`Enter please "+" or "-" or "*" or "/"`);
while (mathOperator !=='+' && mathOperator !=='-' && mathOperator !=='/' && mathOperator !=='*'){
  mathOperator = prompt(`Enter correctly, please "+" or "-" or "*" or "/"`);
}

let mathResult = (num1, num2, operator) => {

  switch (mathOperator) {
    case '+':
      return (+number1) + (+number2);

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    case '/':
    return number1 / number2;
  }
}

console.log(`Your result is ${mathResult()}`);