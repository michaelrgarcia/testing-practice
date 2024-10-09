function shiftAlphabet(alphabet, shiftFactor) {
  const alphabetCopy = alphabet.slice();

  for (let i = 0; i < shiftFactor; i++) {
    const firstLetter = alphabetCopy.shift();
    alphabetCopy.push(firstLetter);
  }

  return alphabetCopy;
}

function makeCaesarString(stringArray, regularAlphabet, caesarAlphabet) {
  for (let i = 0; i < stringArray.length; i++) {
    const currentChar = stringArray[i];

    const regCharIndex = regularAlphabet.indexOf(currentChar.toLowerCase());
    const caesarChar = caesarAlphabet[regCharIndex];

    if (regCharIndex && caesarChar) {
      if (currentChar === currentChar.toUpperCase()) {
        stringArray[i] = caesarChar.toUpperCase();
      } else {
        stringArray[i] = caesarChar;
      }
    }
  }

  const caesarString = stringArray.join("");

  return caesarString;
}

export default function caesarCipher(str, shiftFactor) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const caesarAlphabet = shiftAlphabet(alphabet, shiftFactor);

  if (typeof str === "string") {
    const stringArray = str.split("");
    const caesarString = makeCaesarString(
      stringArray,
      alphabet,
      caesarAlphabet
    );

    return caesarString;
  }
}
