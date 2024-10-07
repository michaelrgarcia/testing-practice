export default function capitalize(str) {
  if (typeof str === "string") {
    const firstChar = str.slice(0, 1);
    const remainingStr = str.slice(1, str.length);

    let newStr = "";

    newStr = firstChar.toUpperCase() + remainingStr;

    return newStr;
  } else {
    return null;
  }
}
