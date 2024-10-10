function average(array) {
  const amtOfElements = array.length;
  let sum = 0;

  for (let i = 0; i < amtOfElements; i++) {
    sum += array[i];
  }

  return sum / amtOfElements;
}

function min(array) {
  let smallestElement;

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    if (i === 0) {
      smallestElement = array[0]; // need a base to compare to
    }

    if (smallestElement > currentElement) {
      smallestElement = currentElement;
    }
  }

  return smallestElement;
}

function max(array) {
  let biggestElement;

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    if (i === 0) {
      biggestElement = array[0]; // need a base to compare to
    }

    if (biggestElement < currentElement) {
      biggestElement = currentElement;
    }
  }

  return biggestElement;
}

export default function analyzeArray(array) {
  if (array.length > 0) {
    return {
      average: average(array),
      min: min(array),
      max: max(array),
      length: array.length,
    };
  } else {
    return null;
  }
}
