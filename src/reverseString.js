export default function reverseString(str) {
  if (typeof str === "string") {
    const strCopy = str.slice();

    const strArray = strCopy.split("");
    const reverseStrArray = strArray.reverse();

    const reverseStr = reverseStrArray.join("");

    return reverseStr;
  } else {
    return null;
  }
}
