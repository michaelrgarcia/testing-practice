export default function capitalize(str) {
    const firstChar = str.slice(0, 1);

    if (firstChar) {
        const remainingStr = str.slice(1, str.length);
        let newStr = "";

        newStr = firstChar.toUpperCase() + remainingStr;
    
        return newStr;
    } else {
        return null;
    }
}