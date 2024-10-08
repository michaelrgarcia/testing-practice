function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return null;
  }
}

function subtract(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  } else {
    return null;
  }
}

function multiply(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 * num2;
  } else {
    return null;
  }
}

function divide(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num2 === 0) {
      return null;
    } else {
      return num1 / num2;
    }
  } else {
    return null;
  }
}

// this is what you have to do without typescript :)

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;
